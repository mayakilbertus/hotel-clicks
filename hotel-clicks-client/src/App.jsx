import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Label } from "recharts";
import i18n from "./i18n/config";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import UpdateGraph from "../components/UpdateGraph";
import NavBar from "../components/NavBar";

function App() {
  const url = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [hotelData, setHotelData] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    navigate(`/${language}/graph`);
  };

  const fetchHotelData = () => {
    axios
      .get(`${url}/api/hotel`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        setHotelData(response.data);
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
      <NavBar
        changeLanguage={changeLanguage}
        currentLanguage={currentLanguage}
      />

      <div className="graph-container">
        <h1>{t("title")}</h1>
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
                {t("yAxisLabel")}
              </Label>
            </YAxis>
            <CartesianGrid stroke="#8e918f" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="numOfClicks" stroke="#8884d8" />
          </LineChart>
        )}
        <UpdateGraph
          hotelDataList={hotelData}
          updateHotelData={fetchHotelData}
          textButton={t("updateBtn")}
        />
      </div>
    </div>
  );
}

export default App;
