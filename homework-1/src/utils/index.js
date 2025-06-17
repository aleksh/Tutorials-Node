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
    let isFindName = false;
    let isFindId = false;
    let isFindFreq = false;

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

                if(isFindName) {
                    params['data']['name'] = str;
                    isFindName = false;
                    return;
                }

                if(isFindId) {
                    params['data']['id'] = str;
                    isFindId = false;
                    return;
                }

                if(isFindFreq) {
                    params['data']['freq'] = str;
                    isFindFreq = false;
                    return;
                }

                switch(str) {
                    case "--name":
                        isFindName = true;
                        break;
                    case "--id":
                        isFindId = true;
                        break;
                    case "--freq":
                        isFindFreq = true;
                        break;
                    default:
                        break;
                }
            }

        })
    }
    
    return params
}

export const now = () => Date.now() + cfg.dayOffset  * 24 * 60 * 60 * 1000