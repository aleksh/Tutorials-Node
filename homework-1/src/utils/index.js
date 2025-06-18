import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cfg } from '../config/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH  = join(__dirname, '../..', 'database.json');

export function readData() {
  const raw = readFileSync(DATA_PATH, { encoding: 'utf8', flag: 'r' });
  return raw ? JSON.parse(raw) : [];
}

export function writeData(data) {
  const raw = JSON.stringify(data);
  writeFileSync(DATA_PATH, raw, 'utf8');
}

export function parseInputParams(items) {
    let isFindCommand = false;
    let isFindValue = false;
    let currentKey;

    const params = {command: '', data: {} }

    if(Array.isArray(items)) {
        items.forEach(item => {
            const str = item.trim();

            if(str.length > 0) {
                if(!isFindCommand) {
                    params['command'] = str;
                    isFindCommand = true;
                    return;
                }

                if(isFindValue) {
                    params.data[currentKey] = str;
                    currentKey = '';
                    isFindValue = false;
                    return;
                }

                if(str.startsWith("--")) {
                    isFindValue = true;
                    currentKey = str.substring(2);
                    return;
                }
            }

        })
    }
   
    return params
}

export const now = () => Date.now() + cfg.dayOffset  * 24 * 60 * 60 * 1000