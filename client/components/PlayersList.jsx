import React from 'react'
import Player from './Player'
import '../styles/index.scss'

const PlayerList = ({ players }) => {
  return (
    <div className='play-container'>
      {players.slice(0, 4).map((player) => {
        console.log(player.isDealer)
        return (
          <div className='card' key={player.auth0_id}>
            <Player
              id={player.id}
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

export default PlayerList
