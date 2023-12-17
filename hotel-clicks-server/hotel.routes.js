const router = require("express").Router();
const Hotel = require("./models/Hotel.model");

router.get("/hotel", (req, res, next) => {
  const { authorization } = req.headers;
  let apiKey = "";

  if (authorization) {
    apiKey = req.headers.authorization.split(" ")[1];
  }

  if (apiKey === process.env.API_KEY) {
    Hotel.find()
      .then((hotelData) => {
        console.log("Fetching Hotel Data successfull");
        res.json(hotelData);
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

router.get("/hotel/:dayId", (req, res, next) => {
  const { dayId } = req.params;
  const { authorization } = req.headers;
  let apiKey = "";

  if (authorization) {
    apiKey = req.headers.authorization.split(" ")[1];
  }

  if (apiKey === process.env.API_KEY) {
    Hotel.findById(dayId)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => res.json(err));
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

router.put("/hotel/:dayId", (req, res, next) => {
  const { dayId } = req.params;
  const { authorization } = req.headers;
  let apiKey = "";
  const updatedData = {
    numOfClicks: Math.floor(Math.random() * 96) + 5,
  };

  if (authorization) {
    apiKey = req.headers.authorization.split(" ")[1];
  }

  if (apiKey === process.env.API_KEY) {
    Hotel.findByIdAndUpdate(dayId, updatedData, { new: true })
      .then((updatedHotel) => res.json(updatedHotel))
      .catch((err) => res.json(err));
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

module.exports = router;
