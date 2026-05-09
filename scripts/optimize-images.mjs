import sharp from 'sharp';
import { statSync, renameSync, unlinkSync } from 'fs';
import path from 'path';

const imagesDir = 'public/images';
const targets = [
  'hero-main.jpg',
  'program-basic-1.jpg',
  'program-creator-1.jpg',
  'basic_2.jpg',
];

const kb = (n) => (n / 1024).toFixed(1) + 'KB';

for (const filename of targets) {
  const filePath = path.join(imagesDir, filename);
  const tmpPath = filePath + '.tmp.jpg';
  const before = statSync(filePath).size;

  await sharp(filePath)
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true })
    .toFile(tmpPath);

  // Replace original with optimized version
  try { unlinkSync(filePath); } catch {}
  renameSync(tmpPath, filePath);

  const after = statSync(filePath).size;
  const pct = (((before - after) / before) * 100).toFixed(1);
  console.log(`${filename}: ${kb(before)} → ${kb(after)} (-${pct}%)`);
}
