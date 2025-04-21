# Onchain-Ticketing

# Ticketing Platform

A blockchain-based ticketing platform MVP using Base Sepolia.

## Features
- Browse events
- Purchase tickets with BaseETH
- Mint secure NFT tickets
- Wallet connection via Wagmi/MetaMask

## Setup
1. Deploy frontend on Vercel (root: `frontend`).
2. Deploy backend on Render (root: `backend`).
3. Deploy `TicketNFT.sol` on Base Sepolia via Remix with compiler 0.8.26.
4. Note: Uses wallet-based minting due to Coinbase API restrictions in Nigeria.

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, Ethers.js, Wagmi
- Backend: Node.js, Express
- Blockchain: Solidity (0.8.26), Base Sepolia

## Troubleshooting
- Ensure `TicketPurchase.jsx` is in `frontend/src/components/` and imported correctly in `App.jsx`.
- Add `"ethers": "^6.13.0"` to `frontend/package.json`.
- Disable non-MetaMask wallet extensions to avoid `window.ethereum` conflicts.