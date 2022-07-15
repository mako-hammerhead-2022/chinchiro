//external dependencies
import React, { useEffect, useState } from 'react'

import '../styles/index.scss'

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
            <p className="subinfo username">{userInfo.userName}</p>
            <div className="nav-tally-earnings">
              <p className="subinfo tally">Wins: {userInfo.win_tally}</p>
              <p className="subinfo earnings">
                Earnings: {userInfo.total_earnings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
