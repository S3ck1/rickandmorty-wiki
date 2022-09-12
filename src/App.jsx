import { useState, useEffect } from "react";
import "./styles/styles.css";
import background from "./assets/1.png";
import RandomLocation from "./components/RandomLocation";


function App() {
  return (
    <div className="App">
      <div style={{backgroundImage: `url(${background})`}}className="main-container">
        <input type="text" placeholder="  Type a location name" />
      </div>
        <RandomLocation />
    </div>
  );
}

export default App;
