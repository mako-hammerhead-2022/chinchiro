import React from 'react'

import PlayerList from './PlayersList'

export default function GameBoard() {
  
  const loadPlayers = [
    {id:1,username: "Mike", avatar: '/img/punk0561.png'},
    {id:2,username: "J Vince", avatar: '/img/punk5822.png'},
    {id:3,username: "Tim", avatar: '/img/punk7971.png'},
    {id:4,username: "Rupert", avatar: '/img/punk8857.png'},
    {id:5,username: "Callum", avatar: '/img/punk9052.png'},
  ]
  return (
    <>
      <section className="main">
        <PlayerList players= {loadPlayers} />
      </section>
    </>
  )
}
