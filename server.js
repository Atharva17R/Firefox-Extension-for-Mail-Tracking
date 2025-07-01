const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;

const logFile = path.join(__dirname, "email_opens.log");

app.get("/tracker", (req, res) => {
  const emailId = req.query.id || "unknown";
  const ip = req.ip;
  const userAgent = req.headers["user-agent"];
  const timestamp = new Date().toISOString();

  const logEntry = `[${timestamp}] Opened email ID: ${emailId}, IP: ${ip}, UA: ${userAgent}\n`;
  fs.appendFileSync(logFile, logEntry);

  const pixelPath = path.join(__dirname, "pixel.png");
  res.setHeader("Content-Type", "image/png");
  res.sendFile(pixelPath);
});

app.listen(PORT, () => {
  console.log(`✅ Tracker server running at http://localhost:${PORT}`);
});
