import React, { useState } from 'react'
import ScoreCard from '../components/ScoreCard/ScoreCard'
import SelectTeam from '../components/SelectTeamPage/SelectTeam'

function DisplayPage() {
  const [selectTeam, setSelecTeam] = useState([])
  return (
    <>
    <ScoreCard />
    <SelectTeam/>
    </>
  )
}

export default DisplayPage