import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlayers } from '../reducers/players'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import AppModal from './widgets/AppModal'

import PlayerList from './PlayersList'
import MenuModal from './widgets/MenuModal'
import { Link } from 'react-router-dom'
import MinimalNav from '../components/widgets/MinimalNav'

export default function GameBoard() {
  const players = useSelector((state) => state.players)
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

  cacheUser(useAuth0)

  return (
    <div className="gameboard-page-container">
      <MinimalNav />
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
