const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 64, 128, 256, 512, 1024];
const inputSvg = path.join(__dirname, '../build/icons/icon.svg');
const outputDir = path.join(__dirname, '../build/icons');

async function generateIcons() {
  for (const size of sizes) {
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `${size}x${size}.png`));
    console.log(`Generated ${size}x${size}.png`);
  }

  // Generate icon.png (512x512 as default)
  await sharp(inputSvg)
    .resize(512, 512)
    .png()
    .toFile(path.join(outputDir, 'icon.png'));
  console.log('Generated icon.png');

  // Generate icon.icns for macOS (1024x1024)
  await sharp(inputSvg)
    .resize(1024, 1024)
    .png()
    .toFile(path.join(outputDir, 'icon-1024.png'));
  console.log('Generated icon-1024.png for macOS');
}

generateIcons().catch(console.error);
