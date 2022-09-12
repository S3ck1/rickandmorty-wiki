import axios from "axios";
import { useState, useEffect } from "react";

const RandomLocation = () => {
  const [location, setLocation] = useState({});

  //Gets a random location from API
  useEffect(() => {
    const randomLocationID = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocationID}`)
      .then((res) => setLocation(res.data));
  }, []);

  console.log(location);

  return (
    <div className="location-container">
      <div className="location-name">
        <h3>{location?.name}</h3>
      </div>
      <div className="location-info">
        <div>
          <h3>Type:</h3>
          <p>{location?.type || "N/I"}</p>
        </div>
        <div>
          <h3>Dimension:</h3>
          <p>{location?.dimension || "N/I"}</p>
        </div>
        <div>
          <h3>Residents:</h3>
          <p>{location?.residents?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomLocation;
