// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
// The entry itself is the X post: one post of our own quoting make.fun's
// make-your-own-bounty post, with a photo of its own. This program only
// hands POST.json to the grader by copying it into the output directory,
// byte for byte, so the house can read the post's address from it.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
