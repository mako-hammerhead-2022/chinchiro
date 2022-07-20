import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../../auth0-utils'
import { Link } from 'react-router-dom'
import { playAudio } from '../../actions/actions'

export default function HomePage() {
  cacheUser(useAuth0)

  return (
    <div className="homepage">
      <div className="homepage-buttons">
        <Link to="/game">
          <button className="start-btn">START GAME</button>
        </Link>
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
