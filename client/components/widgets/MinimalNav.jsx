import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuModal from './MenuModal'
import { useDispatch } from 'react-redux'

export default function Score() {
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(true)
  }

  const dispatch = useDispatch()

  function startGame() {
    dispatch({ type: 'START_GAME' })
    dispatch({ type: 'START_ACTIVE' })
  }
  return (
    <div>
      <MenuModal onClose={() => setShow(false)} show={show} />

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
    </div>
  )
}
