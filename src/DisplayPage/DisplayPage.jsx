import React from "react";
import { useState } from "react";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import SelectTeam from "../components/SelectTeamPage/SelectTeam";

function DisplayPage() {
  const [showSelector, setShowSelector] = useState(false);
  const [selecting, setSelecting] = useState("home");
  const [home, setHome] = useState(null);
  const [away, setAway] = useState(null);
  return (
    <>
      <ScoreCard
        home={home}
        away={away}
        setHome={setHome}
        setAway={setAway}
        showSelector={showSelector}
        setShowSelector={setShowSelector}
        selecting={selecting}
        setSelecting={setSelecting}
      />
      <SelectTeam
        home={home}
        away={away}
        setHome={setHome}
        setAway={setAway}
        showSelector={showSelector}
        setShowSelector={setShowSelector}
        selecting={selecting}
        setSelecting={setSelecting}
      />
    </>
  );
}

export default DisplayPage;
