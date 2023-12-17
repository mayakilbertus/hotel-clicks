import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Label } from "recharts";

const url = "http://localhost:5005";

function App() {
  const [hotelData, setHotelData] = useState(null);

  const fetchHotelData = () => {
    axios
      .get(`${url}/api/hotel`)
      .then((response) => {
        setHotelData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Fetching Hotel data not successful", err);
      });
  };

  useEffect(() => {
    fetchHotelData();
  }, []);

  return (
    <div>
      <div className="graph-container">
        <h1>Klickübersicht Grand Hotel Musterstadt</h1>
        {hotelData && (
          <LineChart
            width={1500}
            height={300}
            data={hotelData}
            className="chart"
          >
            <XAxis dataKey="date" />
            <YAxis dataKey="numOfClicks">
              <Label
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              >
                Anzahl der Klicks
              </Label>
            </YAxis>
            <CartesianGrid stroke="#8e918f" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="numOfClicks" stroke="#8884d8" />
          </LineChart>
        )}
      </div>
    </div>
  );
}

export default App;
