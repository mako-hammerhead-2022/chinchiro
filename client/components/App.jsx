//external dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'

import Nav from './Nav'
import Register from './Register'

import HomePage from './pages/HomePage'
import GameBoard from './GameBoard'

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="register" element={<Register />} />
          <Route path="game" element={<GameBoard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
