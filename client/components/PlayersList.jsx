import React from 'react'
import Player from './Player'
import '../styles/index.scss'

const PlayerList = (props) => {
  console.log(props.players)
  if (props.players == null) {
    return null
  } else {
    return (
      <div className="play-container">
        {props.players.slice(0, 4).map((player) => {
          return (
            <div className="card" key={player.id}>
              <Player
                name={player.username}
                avatar={player.avatar}
                isDealer={player.isDealer}
                wallet={player.wallet}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default PlayerList
