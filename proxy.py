#!/usr/bin/env python3
"""
Tiny Claude API proxy — runs on port 8081
Forwards requests from the dashboard to api.anthropic.com
"""
import http.server
import urllib.request
import urllib.error
import json
import sys

PORT = 8081

class ProxyHandler(http.server.BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # suppress access logs

    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_POST(self):
        if self.path != '/claude':
            self.send_response(404)
            self.end_headers()
            return

        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)

        req = urllib.request.Request(
            'https://api.anthropic.com/v1/messages',
            data=body,
            headers={
                'Content-Type': 'application/json',
                'anthropic-version': '2023-06-01',
                'x-api-key': '',  # key injected from request
            },
            method='POST'
        )

        # Forward the api key from the incoming request
        incoming_key = self.headers.get('x-api-key', '')
        if incoming_key:
            req.add_header('x-api-key', incoming_key)

        try:
            with urllib.request.urlopen(req) as resp:
                data = resp.read()
                self.send_response(200)
                self._cors()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(data)
        except urllib.error.HTTPError as e:
            data = e.read()
            self.send_response(e.code)
            self._cors()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(data)
        except Exception as e:
            self.send_response(500)
            self._cors()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, x-api-key, anthropic-version')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

if __name__ == '__main__':
    server = http.server.HTTPServer(('localhost', PORT), ProxyHandler)
    print(f'Claude proxy running on port {PORT}')
    server.serve_forever()
