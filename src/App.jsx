import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/styles.css";
import background from "./assets/1.png";
import RandomLocation from "./components/RandomLocation";
import ResidentInfo from "./components/ResidentInfo";

function App() {
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
    <div className="App">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="main-container"
      >
        <input type="text" placeholder="  Type a location name" />
      </div>
      <RandomLocation location={location} />
      <div className="residents-container">
        {location?.residents?.map((characterEndpoint) => (
          <ResidentInfo characterEndpoint={characterEndpoint}/>
        ))}
      </div>
    </div>
  );
}

export default App;
