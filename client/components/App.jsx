//external dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'

import Nav from './Nav'
import Register from './Register'
import GameBoard from './GameBoard'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import AppModal from './widgets/AppModal'

function App() {
  cacheUser(useAuth0)
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  function handleShow() {
    setShow(true)
  }

  function startGame() {
    dispatch({ type: 'START_GAME' })
    dispatch({ type: 'START_ACTIVE' })
  }
  return (
    <>
      <AppModal onClose={() => setShow(false)} show={show} />
      <Router>
        <Nav />

        <button onClick={() => dispatch({ type: 'ROTATE_DEALER' })}>
          Rotate Dealer
        </button>
        <button onClick={startGame}>START GAME</button>
        <button onClick={() => dispatch({ type: 'CHANGE_PLAYER' })}>
          Rotate Player
        </button>
        <button onClick={handleShow}>Rules</button>

        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
