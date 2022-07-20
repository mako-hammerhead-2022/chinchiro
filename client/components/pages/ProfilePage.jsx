import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as api from '../../apiClient'

import MinimalNav from '../../components/widgets/MinimalNav'

export default function ProfilePage() {
  const user = useSelector((state) => state.loggedInUser)
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
            loss_tally: userData.loss_tally,
            total_earnings: userData.total_earnings,
          }
          setUserInfo(userObj)

          return null
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user])

  return (
    <div className="profile-page-container">
      <MinimalNav />

      <div className="registration-container no-back">
        <div className="details-container">
          <div className="profile-details">
            <div className="details-header">
              <h2 className="header">{userInfo.userName}</h2>
            </div>
            <div className="profile-info">
              <img
                className="avatar-container card-avatar"
                src={userInfo.avatar}
                alt="player avatar"
              ></img>
              <div className="profile-stats">
                <h2 className="player-name">
                  TOTAL EARNINGS: ${userInfo.total_earnings}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
