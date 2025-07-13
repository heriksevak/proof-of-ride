# 🚗 Proof of Ride — BlockDAG Hackathon 2025 Submission

> A decentralized ride verification system that logs and mints rides as NFTs on-chain, verifying location, time, and authenticity.

---

## 📌 Project Overview

**Proof of Ride** is a dApp that allows users to start/end a ride, captures their geolocation and timestamp, stores the data on IPFS, and mints a corresponding NFT on the Polygon Amoy Testnet via a smart contract deployed on a BlockDAG-compatible EVM.

---

## 🌐 Tech Stack

| Layer        | Tech                                                                 |
|--------------|----------------------------------------------------------------------|
| Frontend     | React Native (Expo)                                                  |
| Backend      | Node.js + Express.js                                                 |
| Blockchain   | Solidity, Hardhat, Ethers.js                                         |
| Storage      | Pinata + IPFS                                                        |
| Network      | Polygon Amoy Testnet via Alchemy                                     |
| Env Mgmt     | dotenv, react-native-dotenv                                          |

---

## 🔩 Features

- 📍 Geolocation capture using Expo Location API
- 📤 Uploads ride metadata to IPFS via Pinata
- 🔐 Mints Proof-of-Ride NFTs with tokenURI
- 🛠️ Backend server handles IPFS pinning
- 📦 Environment variable support for keys (via `.env`)
- 🔗 Smart contract fully deployed on Polygon Amoy Testnet

---

## 📲 Frontend Demo (React Native)

- ✅ Start Ride → Logs location + uploads metadata → Mints NFT
- ✅ End Ride → Same flow with separate metadata
- 📋 View ride logs in real-time

**Preview:**
> Will be shown in demo video / screen recording

---

## 💻 Backend (Node.js)

- `/startRide` & `/endRide`: Accepts ride data (location, time)
- `/uploadMetadata`: Uploads metadata to IPFS, returns tokenURI
- Uses Pinata SDK + dotenv for secure key access

---

## 💠 Smart Contract

```solidity
function mintProofOfRide(string memory rideId, string memory tokenURI) public {
    _safeMint(msg.sender, tokenCounter);
    _setTokenURI(tokenCounter, tokenURI);
    rideIdToTokenId[rideId] = tokenCounter;
    tokenCounter++;
}
```

Deployed to: [Polygon Amoy Testnet](https://polygonscan.com/)

---

## 🧪 Testing

- ✅ Local backend tested via Postman
- ✅ TokenURI validated on IPFS
- ✅ Contract calls confirmed via Alchemy dashboard

---

## 🚀 How to Run

```bash
# Backend
cd backend
npm install
node server.js

# Frontend
cd frontend
npm install
expo start
```

---

## 🛡️ Environment Variables (.env)

```env
PINATA_API_KEY=your_pinata_key
PINATA_SECRET_API_KEY=your_secret_key
ALCHEMY_RPC=https://polygon-amoy.g.alchemy.com/v2/your_key
PRIVATE_KEY=your_wallet_private_key
```

---

## 🎯 Future Scope

- ⛽ Gasless minting via relayer
- 🛣️ Route mapping of full rides
- 🧑‍🤝‍🧑 Real-time driver-passenger interaction
- 📊 Analytics dashboard for ride logs

---

## 🧑‍💻 Made By

Herik Sevak — solo developer 💪

GitHub: [github.com/HerikSevak](https://github.com/HerikSevak)

---

## 📽️ Demo Video

> [Add link here after recording]

---

## 📝 Submission Details

Hackathon: **BlockDAG Hackathon 2025**

Track: **Infrastructure / Public Goods / dApps**
