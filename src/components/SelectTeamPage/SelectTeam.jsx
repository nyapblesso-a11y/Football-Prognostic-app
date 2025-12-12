import React, { useState } from "react";
import data from "../../data.json";
import "./SelecTeamPage.css";

function SelectTeam() {
  const [homeTeam, setHomeTeam] = useState({name:'', flag:''});
  const [awayTeam, setAwayTeam] = useState({name:'', flag:''});
  const [select, setSelect] = useState();

  const handleShowTeam = (teamKey) => {
    setSelect(teamKey);
  };

  const handleSelect = (club) => {
    const setTeam = TeamToSet === "home" ? setHomeTeam : setAwayTeam;
    setTeam((prev) => ({
      ...prev,
      name: club.name,
      flag: club.url,
    }));
  };
  return (
    <>
      <div className="select-section">
        <h1>Various teams</h1>
        <ul className="card">
          {data.clubs.map((club, index) => (
            <li
              key={index}
              className="teams"
            onClick={() => handleShowTeam('homr')}
            >
              <img src={club.url} alt="" />
              <span>{club.name}</span>
            </li>
          ))}

          {data.countries.map((country, index) => (
            <li key={index} className="teams">
              <img src={country.flag} alt="" />
              <span>{country.country}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
console.log(data);

export default SelectTeam;
