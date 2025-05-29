import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

type Data = { hashes: string[] };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { text } = req.body as { text?: string };
  if (typeof text !== 'string') {
    res.status(400).end();
    return;
  }
  const lines = text.split(/\r?\n/).filter(Boolean);
  const hashes = lines.map(line => {
    const digest = crypto.createHash('sha3-256').update(line).digest('hex');
    return digest.slice(0, 8);
  });
  res.status(200).json({ hashes });
}
