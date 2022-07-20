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
              name={player.username}
              avatar={player.avatar}
              isDealer={player.isDealer}
              isActive={player.isActive}
              wallet={player.wallet}
              bet={player.bet}
              result={player.result}
              roll={player.roll}
              completeTurn={player.completeTurn}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PlayerList
