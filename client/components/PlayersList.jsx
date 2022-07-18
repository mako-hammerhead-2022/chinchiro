import React from 'react'
import Player from './Player'
// import '../styles/index.scss'

const PlayerList = ({ players }) => {
  return (
    <div className="play-container">
      {players.slice(0, 4).map((player, i) => {
        return (
          <div className="card" key={player.auth0Id}>
            <Player
              id={player.auth0Id}
              name={player.userName}
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

export default PlayerList
