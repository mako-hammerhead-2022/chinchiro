import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PlayerList from './PlayersList'

const players = [
  {
    id: 1,
    username: 'J Vince',
    avatar: '/img/punk5822.png',
    isDealer: false,
    isActive: false,
    wallet: 1000,
  },
  {
    id: 2,
    username: 'Timmy D',
    avatar: '/img/punk7971.png',
    isDealer: false,
    isActive: false,
    wallet: 1000,
  },
  {
    id: 3,
    username: 'Rupie',
    avatar: '/img/punk8857.png',
    isDealer: false,
    isActive: false,
    wallet: 1000,
  },
  {
    id: 4,
    username: 'Callum',
    avatar: '/img/punk5822.png',
    isDealer: false,
    isActive: false,
    wallet: 1000,
  },
]

export default function GameBoard() {
  return (
    <>
      <section className="main">
        <PlayerList players={players} />
      </section>
    </>
  )
}
