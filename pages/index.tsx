import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/hash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    if (!res.ok) {
      alert('Error hashing text');
      return;
    }
    const data = await res.json();
    setResult(data.hashes);
  }

  return (
    <div style={{padding: '2rem'}}>
      <h1>Keccak 4-byte Tool</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={10}
          cols={50}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter one item per line"
        />
        <br />
        <button type="submit">Hash</button>
      </form>
      <ul>
        {result.map((hash, idx) => (
          <li key={idx}>{hash}</li>
        ))}
      </ul>
    </div>
  );
}
