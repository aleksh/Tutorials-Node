import { config as load } from 'dotenv';
load();

function required(key) {
  const v = process.env[key];
  if (v === undefined) {
    throw new Error(`Missing ENV: ${key}`);
  }
  return v;
}

export const cfg = {
  dayOffset:    Number(required('DAY_OFFSET')), 
  isDev:        process.env.NODE_ENV === 'development',
};