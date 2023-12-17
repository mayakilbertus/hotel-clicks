require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const Hotel = require("./models/Hotel.model");

app.use(cors());
app.use(express.json());

app.get("/api/hotel", (req, res, next) => {
  Hotel.find()
    .then((hotelData) => {
      console.log("Fetching Data works");
      res.json(hotelData);
    })
    .catch((err) => res.json(err));
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
    date: req.body.date,
    numOfClicks: Math.floor(Math.random() * 96) + 5,
  };

  Hotel.findByIdAndUpdate(dayId, updatedData, { new: true })
    .then((updatedHotel) => res.json(updatedHotel))
    .catch((err) => res.json(err));
});

module.exports = app;
