import React, { useState } from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../../auth0-utils'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function HomePage() {
  cacheUser(useAuth0)

  return (
    <div className="homepage">
      <Link to="/game">
        <button className="start-btn">START GAME</button>
      </Link>
    </div>
  )
}
