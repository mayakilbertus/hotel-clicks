const { Schema, model } = require("mongoose");

const hotelSchema = new Schema({
  date: { type: String, required: true },
  numOfClicks: { type: Number, required: true },
});

module.exports = model("Hotel", hotelSchema);
