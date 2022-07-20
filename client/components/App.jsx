//external dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import Register from './Register'

import HomePage from './pages/HomePage'
import GameBoard from './GameBoard'
import ProfilePage from './pages/ProfilePage'

function App() {
  cacheUser(useAuth0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="game" element={<GameBoard />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
