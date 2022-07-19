import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlayers } from '../reducers/players'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import AppModal from './widgets/AppModal'

import PlayerList from './PlayersList'

export default function GameBoard() {
  const players = useSelector((state) => state.players)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])
  console.log(players)

  function handleShow() {
    setShow(true)
  }
  cacheUser(useAuth0)

  function startGame() {
    dispatch({ type: 'START_GAME' })
    dispatch({ type: 'START_ACTIVE' })
  }

  return (
    <>
      <button onClick={() => dispatch({ type: 'ROTATE_DEALER' })}>
        Rotate Dealer
      </button>
      <button onClick={startGame}>START GAME</button>
      <button onClick={() => dispatch({ type: 'CHANGE_PLAYER' })}>
        Rotate Player
      </button>
      <button onClick={handleShow}>Rules</button>
      <AppModal onClose={() => setShow(false)} show={show} />
      <div className="main" data-testid="gameboard-testid">
        {players && <PlayerList players={players} />}
      </div>
    </>
  )
}
