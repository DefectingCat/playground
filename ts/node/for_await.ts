import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, 'min_sec.ts');

async function readFile(path: string) {
  const stream = fs.createReadStream(path, { encoding: 'utf-8' });
  for await (const i of stream) {
    console.log(i);
  }
}

readFile(filePath);
