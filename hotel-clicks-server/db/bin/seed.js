const mongoose = require("mongoose");
const Hotel = require("../../models/Hotel.model");
const { format } = require("date-fns");

const startDate = new Date(2023, 11, 1);
const clicksDec = [];
for (i = 0; i < 31; i++) {
  const currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + i);
  const formattedDate = format(currentDate, "dd.MM.yyyy");

  clicksDec.push({
    date: formattedDate,
    numOfClicks: Math.floor(Math.random() * 96) + 5, // Example till 100 clicks
  });
}

mongoose
  .connect("mongodb://127.0.0.1:27017/hotel-clicks-server")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .then(() => {
    return Hotel.insertMany(clicksDec);
  })
  .then((hotelArrFromDb) => {
    console.log("Collection for December created:", hotelArrFromDb);
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error...", err));
