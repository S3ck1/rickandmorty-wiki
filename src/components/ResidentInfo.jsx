import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({ characterEndpoint }) => {
  const [character, setCharacter] = useState({});
    
  useEffect(() => {
    axios
    .get(`${characterEndpoint}`)
    .then((res) => setCharacter(res.data));
}, []);

  return (
    <div className="resident-card">
        <div className="resident-img-container">
            <img src={character.image} alt="" />
            <div className="status">
                <div 
                className="status-icon" 
                style={{backgroundColor: 
                character.status === "Alive"? "Gray":
                character.status === "Dead"? "Red": "Blue"}}>
                </div>
                {character.status}&nbsp;&nbsp;
            </div>
        </div>
        <div className="resident-info">
            <b className="character-name">{character.name}</b>
            <ul>
                <li>
                    <b>SPECIES:</b>
                    <p>{character.species}</p>
                </li>
                <li>
                    <b>ORIGIN:</b>
                    <p>{character.origin?.name}</p>
                </li>
                <li>
                    <b>APPEARANCE IN EPISODES:</b>
                    <p>{character.episode?.length}</p>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default ResidentInfo;
