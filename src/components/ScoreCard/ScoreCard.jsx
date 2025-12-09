import React from "react";
import "./ScoreCard.css";
import { FaDownload } from "react-icons/fa";
function ScoreCard() {
  return (
    <>
      <div className="header">
        <h1>Football-Score Predictor</h1>
      </div>
      <div className="score-card">
        <div className="team-1">
          <div className="team-name">
            <div className="flag">

            </div>
            <button>
              <span>Select team</span>
            </button>
          </div>
          <div className="input">
            <input type="number" id="positiveNumberInput" min="1"/>
          </div>
        </div>
        <div className="separator">-</div>
        <div className="team-2">
          <div className="input">
            <input type="number" id="positiveNumberInput" min="1"/>
          </div>
          <div className="team-name">
            <div className="flag">
              
            </div>
            <button>
              <span>Select team</span>
            </button>
          </div>
        </div>
      </div>

      <div className="download-btn">
        <button>Generate &amp; Download <FaDownload/> </button>
        
      </div>
    </>
  );
}

export default ScoreCard;
