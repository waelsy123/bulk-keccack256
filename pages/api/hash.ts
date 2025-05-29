import type { NextApiRequest, NextApiResponse } from 'next';
import { keccak256, toUtf8Bytes } from 'ethers';

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
    const selector = keccak256(toUtf8Bytes(line)).slice(0, 10);
    return selector;
  });
  res.status(200).json({ hashes });
}
