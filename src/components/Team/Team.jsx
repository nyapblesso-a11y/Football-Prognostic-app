import React from "react";
import '../Team/tean.css'

function Team({team, onClick}) {
  return (
    <>
      <div className="team-name" onClick={onClick}>
        {team ? 
           ( <div className="teams">
            <img src={team.url} alt="" />
            <span>{team.name}</span>
        </div>
      ):(
        <p>Select team</p>
      )} 
    
      </div>
    </>
  );
}

export default Team;
