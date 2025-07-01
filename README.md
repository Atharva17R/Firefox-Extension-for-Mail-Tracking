# Firefox-Extension-for-Mail-Tracking

A lightweight Firefox extension to track when your email has been opened, similar to Mailtrack — built specifically for Mozilla Firefox.

 ## Features
-One-click tracking pixel copy
-Tracks if the recipient opens the email
-Logs timestamp and email ID when the pixel is triggered
-Built using:
-Firefox WebExtension API
-Node.js (backend)

project-root/
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── script.js
│   └── icon1.png
├── server/
│   ├── index.js
│   └── (optional) tracked.json
└── README.md

## How It Works
1. Click the extension icon in Firefox.
2. Click "Copy Pixel" → An <img> tag with a unique tracking URL is copied to the clipboard.
3. Paste that image tag at the bottom of your email in Gmail or any email client.
4. When the email is opened, the pixel is loaded.
5. The backend server logs that the email was opened (email ID and timestamp).

## Tech Stack
- Firefox Extension (manifest v2)
- HTML/CSS/JS (popup)
- Node.js + Express (backend server)
- REST endpoint for tracking pixel
