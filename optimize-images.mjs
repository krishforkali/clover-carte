/**
 * optimize-images.mjs
 * Converts JPG/PNG images to WebP, resizes oversized ones, reports savings.
 */

import sharp from 'sharp';
import { stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const PUBLIC = 'C:/Users/KRISH/clover-carte/public';

const TARGETS = [
  { src: 'images/platform.jpg',           w: 1248, q: 82 },
  { src: 'logo.jpg',                       w: 160,  q: 85 },
  { src: 'm_images/m_home_hero.jpg',       w: 1536, q: 80 },
  { src: 'images/machine/m1.jpg',          w: 630,  q: 80 },
  { src: 'images/machine/m2.jpg',          w: 630,  q: 80 },
  { src: 'images/machine/m3.jpg',          w: 630,  q: 80 },
  { src: 'images/machine/m4.jpg',          w: 630,  q: 80 },
  { src: 'images/machine/m5.jpg',          w: 630,  q: 80 },
  { src: 'images/machine/m6.jpg',          w: 630,  q: 80 },
  { src: 'm_images/m1.jpg',               w: 630,  q: 80 },
  { src: 'm_images/m2.jpg',               w: 630,  q: 80 },
  { src: 'm_images/m3.jpg',               w: 630,  q: 80 },
  { src: 'm_images/m4.jpg',               w: 630,  q: 80 },
  { src: 'm_images/m5.jpg',               w: 630,  q: 80 },
  { src: 'm_images/m6.jpg',               w: 630,  q: 80 },
  { src: 'images/machine/slim3.png',       w: 900,  q: 85 },
  { src: 'images/machine/vendelle.png',    w: 900,  q: 85 },
  { src: 'images/machine/vendmini.png',    w: 900,  q: 85 },
  { src: 'images/machine/slim.png',        w: 900,  q: 85 },
  { src: 'images/machine/caftina.png',     w: 900,  q: 85 },
  { src: 'images/machine/vendshop.png',    w: 900,  q: 85 },
  { src: 'images/logo.png',               w: 400,  q: 85 },
  { src: 'images/contact_image.png',       w: 1248, q: 82 },
  { src: 'images/contact_image_2.png',     w: 1248, q: 82 },
  { src: 'images/customMachineImage.jpg',  w: 1248, q: 82 },
  { src: 'images/solution_hero.jpg',       w: 1248, q: 82 },
  { src: 'images/vendmini.jpg',            w: 1000, q: 82 },
  { src: 'images/smartslim3.jpg',          w: 1000, q: 82 },
  { src: 'images/vendelle.jpg',            w: 1000, q: 82 },
  { src: 'images/smartslim.jpg',           w: 1000, q: 82 },
  { src: 'images/vendshop.jpg',            w: 1000, q: 82 },
  { src: 'images/caftina.jpg',             w: 1000, q: 82 },
  { src: 'images/vendshopblog.jpg',        w: 1200, q: 82 },
  { src: 'images/lion.png',               w: 600,  q: 85 },
  { src: 'social-share.jpg',              w: 1200, q: 82 },
  { src: 'images/solution/m_sol_1.jpg',   w: 800,  q: 80 },
  { src: 'images/solution/m_sol_2.jpg',   w: 800,  q: 80 },
  { src: 'm_images/home_hero_1.png',      w: 1200, q: 82 },
];

async function run() {
  let totalBefore = 0, totalAfter = 0;

  for (const t of TARGETS) {
    const srcAbs = path.join(PUBLIC, t.src).replace(/\//g, path.sep);
    if (!existsSync(srcAbs)) { console.log('SKIP (not found): ' + t.src); continue; }

    const ext     = path.extname(t.src);
    const destRel = t.src.replace(ext, '') + '.webp';
    const destAbs = path.join(PUBLIC, destRel).replace(/\//g, path.sep);

    await mkdir(path.dirname(destAbs), { recursive: true });

    const before = (await stat(srcAbs)).size;

    try {
      await sharp(srcAbs)
        .resize({ width: t.w, withoutEnlargement: true })
        .webp({ quality: t.q })
        .toFile(destAbs);

      const after = (await stat(destAbs)).size;
      const saved = before - after;
      totalBefore += before;
      totalAfter  += after;

      console.log('OK ' + t.src + '  ' + (before/1024).toFixed(0) + ' -> ' + (after/1024).toFixed(0) + ' KiB  -' + Math.round(saved/before*100) + '%');
    } catch (e) {
      console.error('ERR ' + t.src + ': ' + e.message);
    }
  }

  console.log('');
  console.log('Total before : ' + (totalBefore/1024).toFixed(1) + ' KiB');
  console.log('Total after  : ' + (totalAfter /1024).toFixed(1) + ' KiB');
  console.log('Total saved  : ' + ((totalBefore-totalAfter)/1024).toFixed(1) + ' KiB  (' + Math.round((totalBefore-totalAfter)/totalBefore*100) + '%)');
}

run();
