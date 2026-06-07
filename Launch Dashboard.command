#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Kill anything on ports 8080 and 8081
lsof -ti:8080 | xargs kill -9 2>/dev/null
lsof -ti:8081 | xargs kill -9 2>/dev/null
sleep 1

cd "$DIR"

# Start file server
python3 -m http.server 8080 &
SERVER_PID=$!

# Start Claude proxy
python3 proxy.py &
PROXY_PID=$!

# Wait until file server is ready
echo "Starting..."
for i in {1..10}; do
  sleep 1
  if curl -s http://localhost:8080 > /dev/null 2>&1; then
    break
  fi
done

# Open Chrome
open -a "Google Chrome" "http://localhost:8080"

echo "CS Dashboard running at http://localhost:8080"
echo "Keep this window open. Close it to stop."

trap "kill $SERVER_PID $PROXY_PID 2>/dev/null; exit" INT TERM EXIT
wait $SERVER_PID
