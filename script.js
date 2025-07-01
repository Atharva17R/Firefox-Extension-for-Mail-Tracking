console.log("script.js loaded");
document.getElementById("copyPixel").addEventListener("click", () => {
  const emailId = Date.now(); // Unique ID per email
  const pixelHTML = `<img src="http://localhost:5000/tracker?id=${emailId}" width="1" height="1" style="display:none;" />`;

  navigator.clipboard.writeText(pixelHTML).then(() => {
    alert("✅ Tracking pixel copied to clipboard! Paste it in your email.");
  }).catch(err => {
    console.error("Clipboard write failed", err);
  });
});

