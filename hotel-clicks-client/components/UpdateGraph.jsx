import axios from "axios";

function UpdateGraph({ hotelDataList, updateHotelData }) {
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
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateGraph;
