import React, { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../../auth0-utils'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { playAudio } from '../../actions/actions'

export default function HomePage() {
  const { logout, loginWithRedirect } = useAuth0()

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/game`,
    })
  }

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  return (
    <div className="homepage">
      <div className="homepage-buttons">
        <IfAuthenticated>
          <Link to="/game">
            <button className="start-btn">START GAME</button>
          </Link>
          <Link className="start-btn small" to="/" onClick={handleLogoff}>
            Log off
          </Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to="/" onClick={handleSignIn}>
            <button className="start-btn">SIGN IN TO PLAY</button>
          </Link>
          <Link to="/" onClick={handleRegister}>
            <button className="start-btn small">REGISTER</button>
          </Link>
        </IfNotAuthenticated>
        <button
          onClick={() => playAudio('sounds/music-1.mp3')}
          className="start-btn music"
        >
          MUSIC
        </button>
      </div>
    </div>
  )
}
