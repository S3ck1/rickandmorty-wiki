import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./styles/styles.css";
import background from "./assets/1.png";
import RandomLocation from "./components/RandomLocation";
import ResidentInfo from "./components/ResidentInfo";

function App() {
  const [location, setLocation] = useState({});
  const [inputValue, setInputValue] = useState('');
  const infoRef = useRef(null); 

  //Gets a random location from API
  useEffect(() => {
    const randomLocationID = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocationID}`)
      .then((res) => console.log(res))
  }, []);

  //Gets all locations

  const onSearch = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${inputValue}`)
      .then((res) => setLocation(res.data));
    infoRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="main-container"
      >
        <div className="input-container">
          <input
            type="text"
            placeholder="  Search by ID (From 1 to 126) "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={onSearch}> Search </button>
        </div>
      </div>
      <div ref={infoRef}></div>
      <RandomLocation location={location} />
      <div className="residents-container">
        {location?.residents?.map((characterEndpoint) => (
          <ResidentInfo characterEndpoint={characterEndpoint} key={characterEndpoint}/>
        ))}
      </div>
    </div>
  );
}

export default App;
