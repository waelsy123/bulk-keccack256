# Bulk Keccak256

This Next.js app hashes each line of input text individually using SHA3-256 from Node's crypto library and returns the first 4 bytes (8 hex characters).

## Usage

1. Install dependencies (requires Node.js):
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser and paste lines of text to hash.

**Note:** The hashing uses `sha3-256` from Node's crypto, which may not be fully compatible with Ethereum's Keccak-256.
