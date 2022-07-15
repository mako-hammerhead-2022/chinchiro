import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import PlayerList from './PlayersList'


export default function GameBoard() {

  return (
    <>
      <section className="main">
        <PlayerList players= {loadPlayers} />
      </section>
    </>
  )
}
