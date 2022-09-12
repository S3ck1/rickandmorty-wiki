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
      .then((res) => setLocation(res.data));
  }, []);

  //Gets all locations

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchTerm}`)
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
            placeholder="  Search location by ID"
            value={inputValue}
            onChange={onChange}
          />
          <button onClick={() => onSearch(inputValue)}> Search </button>
        </div>
      </div>
      <div ref={infoRef}></div>
      <RandomLocation location={location} />
      <div className="residents-container">
        {location?.residents?.map((characterEndpoint) => (
          <ResidentInfo characterEndpoint={characterEndpoint} />
        ))}
      </div>
    </div>
  );
}

export default App;
