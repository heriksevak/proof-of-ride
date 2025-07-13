const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const pinataSDK = require('@pinata/sdk');

dotenv.config();

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY);

router.post('/uploadMetadata', async (req, res) => {
  const { rideId, type, location } = req.body;

  if (!rideId || !type || !location) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const metadata = {
    name: "Proof of Ride",
    description: `Ride completed (${type}) by user-123`,
    image: "https://via.placeholder.com/300",
    attributes: [
      { trait_type: "Type", value: type },
      { trait_type: "Ride ID", value: rideId },
      { trait_type: "Time", value: new Date().toISOString() },
      { trait_type: "Location", value: location }
    ]
  };

  try {
    const result = await pinata.pinJSONToIPFS(metadata);
    const tokenURI = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    return res.json({ tokenURI });
  } catch (err) {
    console.error("IPFS Upload Failed:", err);
    return res.status(500).json({ error: "Failed to upload metadata" });
  }
});

module.exports = router;
