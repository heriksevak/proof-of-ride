const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;
const metadataRoute = require('./metadata');


app.use(cors());
app.use(bodyParser.json());
app.use('/', metadataRoute);

let rides = [];

app.post("/startRide", (req, res) => {
  const { userId, location, timestamp } = req.body;
  const ride = { userId, location, timestamp, type: "start" };
  rides.push(ride);
  console.log("Start Ride:", ride);
  res.status(200).json({ message: "Ride started", ride });
});

app.post("/endRide", (req, res) => {
  const { userId, location, timestamp } = req.body;
  const ride = { userId, location, timestamp, type: "end" };
  rides.push(ride);
  console.log("End Ride:", ride);
  res.status(200).json({ message: "Ride ended", ride });
});

app.get("/rides", (req, res) => {
  res.status(200).json(rides);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
