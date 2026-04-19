#!/usr/bin/env node
/**
 * Generate premium OG image for Hakkey website
 * Uses video frame + gradient overlay + logo + text
 * Output: public/og-image.jpg (1200×630, <300KB)
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const ROOT = path.resolve(process.cwd());
const PUBLIC = path.join(ROOT, 'public');

const WIDTH = 1200;
const HEIGHT = 630;

async function generateOGImage() {
  console.log('🎨 Generating OG image...');

  // 1. Load and crop the video frame to 1200×630
  const frameBuffer = await sharp('/tmp/hakkey-og-frames/frame_1.0s.jpg')
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'center' })
    .toBuffer();

  // 2. Warm tone enhancement — boost saturation and warmth slightly
  const enhancedFrame = await sharp(frameBuffer)
    .modulate({ saturation: 1.15, brightness: 1.02 })
    .toBuffer();

  // 3. Create gradient overlay SVG (dark left, lighter right)
  const gradientOverlay = Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Left-heavy horizontal dark gradient -->
        <linearGradient id="leftDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0a0200" stop-opacity="0.88"/>
          <stop offset="35%" stop-color="#1a0500" stop-opacity="0.78"/>
          <stop offset="60%" stop-color="#1a0500" stop-opacity="0.45"/>
          <stop offset="85%" stop-color="#0a0200" stop-opacity="0.20"/>
          <stop offset="100%" stop-color="#0a0200" stop-opacity="0.30"/>
        </linearGradient>
        <!-- Bottom vignette -->
        <linearGradient id="bottomVignette" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#000" stop-opacity="0"/>
          <stop offset="70%" stop-color="#000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#100300" stop-opacity="0.65"/>
        </linearGradient>
        <!-- Top vignette (subtle) -->
        <linearGradient id="topVignette" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#000" stop-opacity="0"/>
          <stop offset="75%" stop-color="#000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#0a0200" stop-opacity="0.50"/>
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#leftDark)"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bottomVignette)"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#topVignette)"/>
    </svg>
  `);

  // 4. Create text overlay SVG
  const textOverlay = Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <!-- Badge pill -->
      <rect x="72" y="165" width="340" height="32" rx="16" fill="rgba(255,107,0,0.2)" stroke="rgba(255,107,0,0.4)" stroke-width="1"/>
      <circle cx="90" cy="181" r="4" fill="#22c55e"/>
      <text x="102" y="186" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.85)" letter-spacing="0.3">
        Serving fresh homemade food near you
      </text>

      <!-- Tagline below logo area -->
      <text x="72" y="370" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="32" font-weight="600" fill="rgba(255,255,255,0.80)" letter-spacing="0.5">
        Home Food Near You
      </text>

      <!-- Subheading -->
      <text x="72" y="415" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="18" font-weight="400" fill="rgba(255,255,255,0.60)" letter-spacing="0.3">
        Freshly prepared by home chefs with love &amp; care ❤️
      </text>

      <!-- Subtle bottom domain -->
      <text x="72" y="580" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="rgba(255,255,255,0.40)" letter-spacing="1.5">
        hakkey.com
      </text>
    </svg>
  `);

  // 5. Load the Hakkey logo
  const logoPath = path.join(PUBLIC, 'hakkey-hero-logo.png');
  const logoBuffer = await sharp(logoPath)
    .resize(360, null, { fit: 'inside' }) // scale logo width to 360px
    .toBuffer();
  const logoMeta = await sharp(logoBuffer).metadata();

  // 6. Composite everything
  const result = await sharp(enhancedFrame)
    .composite([
      { input: gradientOverlay, top: 0, left: 0 },
      { input: textOverlay, top: 0, left: 0 },
      {
        input: logoBuffer,
        top: 215,       // position below badge, above tagline
        left: 68,
      },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  // 7. Check size and save
  const sizeKB = (result.length / 1024).toFixed(1);
  console.log(`📐 Image size: ${sizeKB} KB`);

  if (result.length > 300 * 1024) {
    console.log('⚠️  Over 300KB, re-encoding with lower quality...');
    const compressed = await sharp(result)
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
    console.log(`📐 Compressed: ${(compressed.length / 1024).toFixed(1)} KB`);
    fs.writeFileSync(path.join(PUBLIC, 'og-image.jpg'), compressed);
  } else {
    fs.writeFileSync(path.join(PUBLIC, 'og-image.jpg'), result);
  }

  console.log(`✅ Saved to public/og-image.jpg`);
  console.log(`📏 Dimensions: ${WIDTH}×${HEIGHT}`);
}

generateOGImage().catch((err) => {
  console.error('❌ Failed:', err);
  process.exit(1);
});
