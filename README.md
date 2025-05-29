# Bulk Keccak256

This Next.js app hashes each line of input text individually using `keccak256`
from the Ethers library and returns the first 4 bytes (8 hex characters, including the `0x` prefix).

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

**Note:** Hashing uses Ethereum's Keccak-256 implementation via the Ethers library.
