# 🚗 Proof of Ride

A decentralized ride-tracking system built for the BlockDAG Hackathon 2025. It captures ride start/end with GPS, stores metadata on IPFS, and records proofs on-chain via smart contracts.

---

## 📌 Overview

- ⛓️ Uses Polygon Amoy testnet + BlockDAG EVM
- 🛰️ Records start & end ride with GPS
- 🧾 Metadata saved on IPFS via Pinata
- 🪙 On-chain NFT minted as proof of ride

---

## 🧱 Tech Stack

| Layer        | Tech                         |
|--------------|------------------------------|
| Frontend     | React Native (Expo)          |
| Backend      | Node.js, Express.js          |
| Blockchain   | Solidity, Hardhat, Ethers.js |
| IPFS         | Pinata SDK                   |
| Network      | Polygon Amoy Testnet         |

---

## 🔁 Workflow

1. User taps “Start Ride”
2. GPS location + timestamp fetched
3. Metadata uploaded to Pinata (IPFS)
4. Smart contract `mintProofOfRide()` is called with rideId & tokenURI
5. User taps “End Ride” — same flow repeats

---

## 🛠️ How to Run

### 📦 Clone the Repo

```bash
git clone https://github.com/<your-username>/proof-of-ride.git
cd proof-of-ride
