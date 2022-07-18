//external dependencies
import React from 'react'

// import '../styles/index.scss'

export default function UserNavItem({ userInfo }) {
  return (
    <>
      <div className="nav-item-container user-info-container">
        <div className="nav-user-info">
          <div className="nav-user-image">
            <img
              alt="the user's avatar"
              src={userInfo.avatar}
              className="user-image"
            />
          </div>

          <div className="nav-user-textual">
            <p className="subinfo username" alt="username">
              {userInfo.username}
            </p>
            <div className="nav-tally-earnings">
              <p className="subinfo tally" data-testid="win-tally">
                Wins: {userInfo.win_tally}
              </p>
              <p className="subinfo earnings" data-testid="total-earnings">
                Earnings: {userInfo.total_earnings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
