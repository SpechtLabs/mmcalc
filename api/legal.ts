import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

const CLI_AGENTS = ['curl', 'wget', 'httpie', 'powershell', 'fetch'];

function isCLI(ua: string | undefined): boolean {
  if (!ua) return false;
  const lower = ua.toLowerCase();
  return CLI_AGENTS.some(a => lower.includes(a));
}

const PAGES: Record<string, string> = {
  terms: 'terms.md',
  privacy: 'privacy-policy.md',
  impressum: 'impressum.md',
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  const page = req.query.page as string;

  if (!isCLI(req.headers['user-agent'])) {
    // Browser: let the SPA handle it
    const html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
    return;
  }

  const filename = PAGES[page];
  if (!filename) {
    res.status(404).send('Not found\n');
    return;
  }

  try {
    const content = readFileSync(join(process.cwd(), 'public', filename), 'utf-8');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(content);
  } catch {
    res.status(404).send('Not found\n');
  }
}
