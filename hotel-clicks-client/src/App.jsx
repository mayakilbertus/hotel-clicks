import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Label } from "recharts";
import { Link } from "react-router-dom";
import UpdateGraph from "../components/UpdateGraph";

function App() {
  const url = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [hotelData, setHotelData] = useState(null);

  const fetchHotelData = () => {
    axios
      .get(`${url}/api/hotel`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
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
      <h2>Sprache auswählen:</h2>
      <Link to="/de/graph">de</Link>/<Link to="/en/graph">en</Link>
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
      <UpdateGraph hotelDataList={hotelData} updateHotelData={fetchHotelData} />
    </div>
  );
}

export default App;
