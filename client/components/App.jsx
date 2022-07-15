//external dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React from 'react'

import Nav from './Nav'
import Register from './Register'
import GameBoard from './GameBoard'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'

function App() {
  cacheUser(useAuth0)
  const dispatch = useDispatch()
  return (
    <>
      <Router>
        <Nav />
        <button onClick={() => dispatch({ type: 'ROTATE_DEALER' })}>
          Rotate Dealer
        </button>
        <button onClick={() => dispatch({ type: 'START_GAME' })}>
          START GAME
        </button>
        <Routes>
          <Route path='/' element={<GameBoard />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
