import React from 'react'
import Player from './Player'

const PlayerList = ({ players }) => {
  return (
    <div className="play-container">
      {players.slice(0, 4).map((player) => {
        return (
          <div className="card" key={player.auth0_id}>
            <Player
              id={player.id}
              name={player.userName}
              avatar={player.avatar}
              isDealer={player.isDealer}
              wallet={player.wallet}
              bet={player.bet}
              result={player.result}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PlayerList
