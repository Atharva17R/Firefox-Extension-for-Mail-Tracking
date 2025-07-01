const fs = require("fs");

const pixel = Buffer.from(
  "89504E470D0A1A0A0000000D4948445200000001000000010806000000" +
  "1F15C4890000000A49444154789C6360000002000100FFFF030000060005" +
  "57BF3A0000000049454E44AE426082", "hex"
);

fs.writeFileSync("pixel.png", pixel);
console.log("🖼️  pixel.png created");
