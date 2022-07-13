import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

import UserNavItem from './UserNavItem'

function Nav() {
  const { logout, loginWithRedirect } = useAuth0()
  const user = useSelector((state) => state.loggedInUser)
  console.log(user)
  // const [userInfo, setUserInfo] = {
  //   userName: '',
  //   avatar: '',
  // }

  // const auth0Id = user?.auth0Id,

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
    console.log()
  }
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
          <div className="nav-header-container">
            <div className="nav-item-container">
              <Link className="nav-item header" to="/">
                Chinchiro - チンチロリン, チンチロ
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
              <UserNavItem />
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
