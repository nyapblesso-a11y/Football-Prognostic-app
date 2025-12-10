import React, { createRef, useRef, useState } from "react";
import "./ScoreCard.css";
import html2canvas from "html2canvas";
import { FaDownload, FaPlus, FaMinus } from "react-icons/fa";

function ScoreCard() {
  const [scoreTeam1, setScoreTeam1] = useState(0);
  const [scoreTeam2, setScoreTeam2] = useState(0);
  const ScoreCardRef = useRef(null);

  const incrementScore1 = () => setScoreTeam1((prev) => prev + 1);
  const decrementScore1 = () => setScoreTeam1((prev) => Math.max(0, prev - 1));
  const incrementScore2 = () => setScoreTeam2((prev) => prev + 1);
  const decrementScore2 = () => setScoreTeam2((prev) => Math.max(0, prev - 1));

  const handleDownload = async () => {
    const element = ScoreCardRef.current;
    if (!element) return;
    try {
      const canvas = await html2canvas(element, { scale: 2 });
      const imageDataURL = canvas.toDataURL("image/png");
      triggerDownload(imageDataURL, "Predicted-score.png");
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const triggerDownload = (dataURL, filename) => {
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div ref={ScoreCardRef} className="score">
        <div className="header">
          <h1>Football-Score Predicts</h1>
        </div>
        <div className="score-card">
          <div className="team-1">
            <div className="team-name">
              <div className="flag"></div>
              <button>
                <span>Select team 1</span>
              </button>
            </div>
            <div className="score-counter">
              <button onClick={decrementScore1}>
                <FaMinus />
              </button>
              <div className="score-display">{scoreTeam1}</div>
              <button onClick={incrementScore1}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="separator">-</div>
          <div className="team-2">
            <div className="score-counter">
              <button onClick={decrementScore2}>
                <FaMinus />
              </button>
              <div className="score-display">{scoreTeam2}</div>
              <button onClick={incrementScore2}>
                <FaPlus />
              </button>
            </div>
            <div className="team-name">
              <div className="flag"></div>
              <button>
                <span>Select team 2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="download-btn">
        <button onClick={handleDownload}>
          Generate &amp; Download <FaDownload />{" "}
        </button>
      </div>
    </>
  );
}

export default ScoreCard;
