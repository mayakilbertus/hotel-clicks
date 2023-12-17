require("./db");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Hotel = require("./models/Hotel.model");

app.use(cors());
app.use(express.json());

app.get("/api/hotel", (req, res, next) => {
  const { authorization } = req.headers;
  let apiKey = "";

  if (authorization) {
    apiKey = req.headers.authorization.split(" ")[1];
    console.log(apiKey);
    console.log("env", process.env.API_KEY);
  }

  if (apiKey === process.env.API_KEY) {
    Hotel.find()
      .then((hotelData) => {
        console.log("Fetching Hotel Data successfull");
        console.log(authorization);
        res.json(hotelData);
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.get("/api/hotel/:dayId", (req, res, next) => {
  const { dayId } = req.params;
  Hotel.findById(dayId)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json(err));
});

app.put("/api/hotel/:dayId", (req, res, next) => {
  const { dayId } = req.params;
  console.log(req.body);
  const updatedData = {
    numOfClicks: Math.floor(Math.random() * 96) + 5,
  };

  Hotel.findByIdAndUpdate(dayId, updatedData, { new: true })
    .then((updatedHotel) => res.json(updatedHotel))
    .catch((err) => res.json(err));
});

module.exports = app;
