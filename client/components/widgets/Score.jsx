import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {
  const score = useSelector((state) => state.players)

  return <div className="score-container">{score.result}</div>
}
