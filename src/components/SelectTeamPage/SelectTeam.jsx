import React from "react";
import data from "../../data.json";
import "./SelecTeamPage.css";
function SelectTeam() {
  return (
    <>
      <div className="select-section">
        <h1>Various teams</h1>
        <ul className="card">
          {data.clubs.map((club, index) => (
            <li key={index} className="teams">
              <img src={club.url} alt="" />
              <span>{club.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
console.log(data);

export default SelectTeam;
