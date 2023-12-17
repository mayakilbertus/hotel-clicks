import axios from "axios";

function UpdateGraph({ hotelDataList, updateHotelData, textButton }) {
  const url = import.meta.env.VITE_API_URL;

  const handleUpdate = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const randomDateIndex = Math.floor(Math.random() * 31);

    axios
      .put(
        `${url}/api/hotel/${hotelDataList[randomDateIndex]._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        updateHotelData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleUpdate}>{textButton}</button>
    </div>
  );
}

export default UpdateGraph;
