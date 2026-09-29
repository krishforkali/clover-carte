import sharp from 'sharp';
import { stat } from 'fs/promises';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const ASSETS_DIR = 'C:/Users/KRISH/clover-carte/src/assets/images/industries';
const HELPER    = 'C:/Users/KRISH/clover-carte/src/utils/helper.js';

const FILES = [
  'indus_1.jpg', 'indus_2.jpg', 'indus_3.jpg', 'indus_4.jpg',
  'indus_5.jpg', 'indus_6.jpg', 'indus_7.jpg', 'indus_8.jpg', 'indus_9.jpg',
];

let totalBefore = 0, totalAfter = 0;

for (const f of FILES) {
  const src  = path.join(ASSETS_DIR, f).replace(/\//g, path.sep);
  const dest = src.replace('.jpg', '.webp');
  if (!existsSync(src)) { console.log('SKIP: ' + f); continue; }

  const before = (await stat(src)).size;
  await sharp(src).resize({ width: 630, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
  const after = (await stat(dest)).size;
  totalBefore += before; totalAfter += after;
  console.log('OK ' + f + '  ' + (before/1024).toFixed(0) + ' -> ' + (after/1024).toFixed(0) + ' KiB  -' + Math.round((before-after)/before*100) + '%');
}

console.log('\nTotal saved: ' + ((totalBefore-totalAfter)/1024).toFixed(1) + ' KiB');

// Update helper.js imports
let helperSrc = readFileSync(HELPER, 'utf-8');
const updated = helperSrc.replace(/indus_(\d+)\.jpg/g, 'indus_$1.webp');
if (updated !== helperSrc) {
  writeFileSync(HELPER, updated, 'utf-8');
  console.log('\nUpdated helper.js imports -> .webp');
} else {
  console.log('\nhelper.js already up to date');
}
