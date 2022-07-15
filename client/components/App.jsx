//external dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import Nav from './Nav'
import Register from './Register'
import GameBoard from './GameBoard'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import AppModal from './widgets/AppModal'

import Player from './Player'

function App() {
  cacheUser(useAuth0)
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  function handleShow() {
    setShow(true)
  }

  return (
    <>
      <Router>
        <Nav />
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <button onClick={() => dispatch({ type: 'ROTATE_DEALER' })}>
          Rotate Dealer
        </button>
        <button onClick={() => dispatch({ type: 'START_GAME' })}>
          START GAME
        </button>
        <AppModal onClose={() => setShow(false)} show={show} />

        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
