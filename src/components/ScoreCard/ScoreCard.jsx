import React from "react";
import "./ScoreCard.css";
function ScoreCard() {
  return (
    <>
      <div className="header">
        <h1>Football-Score Predictor</h1>
      </div>
      <div className="score-card">
        <div className="team-1">
          <div className="flag"></div>
          <div className="input">
            <input type="number" />
          </div>
        </div>
        <div className="separator">-</div>
        <div className="team-2">
          <div className="flag"></div>
          <div className="input">
            <input type="number" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScoreCard;
