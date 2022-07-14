//external dependencies
import React, { useEffect, useState } from 'react'

import '../styles/index.scss'

export default function UserNavItem(props) {
  const [userData, setUserData] = useState('')

  return (
    <>
      <div className="nav-item-container user-info-container">
        <div className="nav-user-info">
          <img
            alt="the user's avatar"
            src="img/punk0561.png"
            className="user-image"
          />
          <p className="username">Lorem</p>
        </div>
      </div>
    </>
  )
}
