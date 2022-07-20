import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlayers } from '../reducers/players'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import AppModal from './widgets/AppModal'

import PlayerList from './PlayersList'
import MenuModal from './widgets/MenuModal'
import { Link } from 'react-router-dom'

export default function GameBoard() {
  const players = useSelector((state) => state.players)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.loggedInUser)

  let playerList
  function setUpPlayers() {
    const userPlayer = players.filter(
      (player) => player.auth0_id === currentUser.auth0Id
    )
    playerList = [...userPlayer, ...players]
  }

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])
  players ? setUpPlayers() : ''

  console.log(currentUser.auth0Id)

  function handleShow() {
    setShow(true)
  }
  cacheUser(useAuth0)

  function startGame() {
    dispatch({ type: 'START_GAME' })
    dispatch({ type: 'START_ACTIVE' })
  }

  return (
    <div className="gameboard-page-container">
      <div className="menu-buttons">
        <div className="logo-container">
          <Link to="/" className="logo">
            CHINCHIRO PUNK
          </Link>
        </div>
        <div className="buttons-container">
          <div className="nav-btn " onClick={handleShow}>
            MENU
          </div>
          <div className="nav-btn" onClick={startGame}>
            RESTART GAME
          </div>
        </div>
      </div>

      <MenuModal onClose={() => setShow(false)} show={show} />
      <div className="main" data-testid="gameboard-testid">
        {currentUser.auth0Id === '' ? (
          <p className="start-btn">Loading Gameboard...</p>
        ) : (
          players && <PlayerList players={playerList} />
        )}
      </div>
    </div>
  )
}
