//external dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react'

import Nav from './Nav'
import Register from './Register'
import GameBoard from './GameBoard'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'

import Player from './Player'

function App() {
  cacheUser(useAuth0)
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
