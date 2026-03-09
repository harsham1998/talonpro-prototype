# Mobile Access Setup with ngrok

This guide will help you access the TalonPro Portal prototype on your mobile device using ngrok.

## Prerequisites

1. **Install ngrok** (if not already installed):
   ```bash
   # Using Homebrew (macOS)
   brew install ngrok/ngrok/ngrok

   # Or download from: https://ngrok.com/download
   ```

2. **Sign up for ngrok** (free):
   - Go to https://dashboard.ngrok.com/signup
   - Copy your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken
   - Run: `ngrok config add-authtoken YOUR_TOKEN`

## Quick Start

### Option 1: Using the Helper Script (Easiest)

```bash
cd /Users/harsha/CommunicationPortal/prototype
chmod +x start-mobile.sh
./start-mobile.sh
```

The script will:
1. Start a local web server on port 8000
2. Launch ngrok tunnel
3. Display the public URL to access on your mobile

### Option 2: Manual Setup

1. **Start a local web server** (choose one):

   ```bash
   # Using Python 3
   cd /Users/harsha/CommunicationPortal/prototype
   python3 -m http.server 8000

   # Or using Python 2
   python -m SimpleHTTPServer 8000

   # Or using Node.js (if you have npx)
   npx serve -p 8000

   # Or using PHP
   php -S localhost:8000
   ```

2. **In a new terminal, start ngrok**:

   ```bash
   ngrok http 8000
   ```

3. **Access on mobile**:
   - Look for the "Forwarding" URL in the ngrok output (e.g., https://abc123.ngrok-free.app)
   - Open that URL on your mobile browser

## What You'll See

When you run ngrok, you'll see output like this:

```
ngrok

Session Status                online
Account                       your-email@example.com
Version                       3.x.x
Region                        United States (us)
Latency                       -
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://abc123.ngrok-free.app -> http://localhost:8000

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

**Your mobile URL is the "Forwarding" HTTPS address** (e.g., `https://abc123.ngrok-free.app`)

## Testing

1. Copy the ngrok HTTPS URL
2. Open it on your mobile device
3. You should see the TalonPro Portal dashboard
4. Navigate through:
   - Dashboard (index.html)
   - Guest List (guest-list-new.html)
   - Guest Detail (guest-detail-new.html)
   - AI Features (ai-features.html)

## Monitoring

- **ngrok Web Interface**: Open http://localhost:4040 in your desktop browser to see:
  - Request history
  - Request/response details
  - Replay requests
  - Traffic statistics

## Stopping the Server

1. Press `Ctrl+C` in the terminal running the web server
2. Press `Ctrl+C` in the terminal running ngrok

## Troubleshooting

### Port Already in Use
If port 8000 is busy, use a different port:
```bash
python3 -m http.server 8001
ngrok http 8001
```

### ngrok Not Found
Make sure ngrok is installed and in your PATH:
```bash
which ngrok
# Should show: /usr/local/bin/ngrok or similar
```

### Mobile Shows "ngrok browser warning"
This is normal for free accounts. Click "Visit Site" to continue.

### Changes Not Showing
- Hard refresh on mobile: Pull down to refresh
- Clear mobile browser cache
- Restart the web server

## Tips

- **Keep the terminals open** while testing on mobile
- **Bookmark the ngrok URL** for quick access during testing
- **Share the URL** with team members for remote testing
- **Each time you restart ngrok**, you'll get a new URL (unless you have a paid plan)

## Security Note

⚠️ **Important**:
- The ngrok URL is publicly accessible
- Don't share sensitive data through the prototype
- Stop ngrok when not in use
- This is for testing purposes only

## Paid ngrok Features (Optional)

With a paid ngrok plan, you can get:
- Custom domain (e.g., talonpro.ngrok.io)
- Reserved URLs that don't change
- More concurrent connections
- No browser warning page

---

**Need help?** Check https://ngrok.com/docs
