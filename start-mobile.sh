#!/bin/bash

# TalonPro Portal - Mobile Access Setup Script
# This script starts a local web server and ngrok tunnel

echo "🚀 Starting TalonPro Portal for Mobile Access..."
echo ""

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok is not installed!"
    echo ""
    echo "Install it with:"
    echo "  brew install ngrok/ngrok/ngrok"
    echo ""
    echo "Or download from: https://ngrok.com/download"
    exit 1
fi

# Check if Python is available
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "❌ Python is not installed!"
    echo "Please install Python 3 to run the local web server."
    exit 1
fi

# Port to use
PORT=8000

# Check if port is already in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port $PORT is already in use."
    echo "Trying alternative port 8001..."
    PORT=8001

    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "❌ Port $PORT is also in use. Please stop the service using this port."
        exit 1
    fi
fi

# Change to prototype directory
cd "$(dirname "$0")"

echo "📁 Working directory: $(pwd)"
echo ""

# Start Python web server in background
echo "🌐 Starting local web server on port $PORT..."
$PYTHON_CMD -m http.server $PORT > /dev/null 2>&1 &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Check if server started successfully
if ! ps -p $SERVER_PID > /dev/null; then
    echo "❌ Failed to start web server"
    exit 1
fi

echo "✅ Web server started (PID: $SERVER_PID)"
echo ""

# Start ngrok
echo "🔗 Starting ngrok tunnel..."
echo ""
echo "${YELLOW}╔════════════════════════════════════════════════════════════════╗${NC}"
echo "${YELLOW}║  IMPORTANT: Keep this terminal window open while testing!     ║${NC}"
echo "${YELLOW}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $SERVER_PID 2>/dev/null
    echo "✅ Web server stopped"
    echo "✅ ngrok stopped"
    exit 0
}

# Set trap to cleanup on Ctrl+C
trap cleanup INT TERM

# Start ngrok (this will block until user presses Ctrl+C)
ngrok http $PORT --log=stdout

# This line will only execute if ngrok exits
cleanup
