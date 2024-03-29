import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

import UserNavItem from './UserNavItem'
import * as api from '../apiClient'

function Nav() {
  const { logout, loginWithRedirect } = useAuth0()
  const user = useSelector((state) => state.loggedInUser)
  const wallet = useSelector((state) => state.playerWallet)

  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    if (user.auth0Id !== '') {
      api
        .getUserInfo(user.auth0Id)
        .then((userData) => {
          const userObj = {
            userName: userData.username,
            avatar: userData.avatar,
            win_tally: userData.win_tally,
            total_earnings: userData.total_earnings,
          }
          setUserInfo(userObj)

          return null
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user, wallet])
  // const auth0Id = user?.auth0Id,

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
          <div className="nav-header-container">
            <div className="nav-item-container">
              <Link className="nav-item header" to="/">
                <h1 data-testid="nav-logo" className="logo">
                  CHINCHIRRO
                </h1>
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <div className="nav-item-container">
              <Link className="nav-item" to="/">
                Home
              </Link>
            </div>

            <IfAuthenticated>
              <div className="nav-item-container">
                <a className="nav-item" href="/" onClick={handleLogoff}>
                  Log off
                </a>
              </div>
              <UserNavItem userInfo={userInfo} />
            </IfAuthenticated>
            <IfNotAuthenticated>
              <div className="nav-item-container">
                <a className="nav-item" href="/" onClick={handleRegister}>
                  Register
                </a>
              </div>
              <div className="nav-item-container">
                <a className="nav-item" href="/" onClick={handleSignIn}>
                  Sign in
                </a>
              </div>
            </IfNotAuthenticated>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
