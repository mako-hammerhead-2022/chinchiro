import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlayers } from '../reducers/players'

import PlayerList from './PlayersList'

export default function GameBoard() {
  const players = useSelector((state) => state.players)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])

  return (
    <>
      <section className='main'>
        {players && <PlayerList players={players} />}
      </section>
    </>
  )
}
