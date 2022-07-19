import React from 'react'

export default function PlayerDead(props) {
  console.log(props)
  return (
    <div className="gameover-container">
      {' '}
      <div className="card-top">
        <div className="user-info">
          <img
            className="avatar-container grayed"
            src={props.avatar}
            alt="player avatar"
          ></img>
          <h1>{props.username}</h1>
        </div>
      </div>
      <div className="card-mid">
        <h1 className="dice-result game-over">Game Over!</h1>
      </div>
    </div>
  )
}
