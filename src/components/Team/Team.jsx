import React from "react";
import '../Team/tean.css'

function Team({team}) {
  return (
    <>
      <div className="team-name">
        <div className="flag">
            <img src={team?.flag} alt="" />
        </div>
      </div>
    </>
  );
}

export default Team;
