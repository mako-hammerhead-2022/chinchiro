import React from 'react'
import Player from './Player'
import '../styles/index.scss'

const PlayerList = ({players}) => {

    return (
      <div className="play-container">
        {players && players.slice(0, 4).map((player) => {
          console.log(player)
          return (
            <div className="card" key={player.id}>
              <Player
                id={player.id}
                name={player.username}
                avatar={player.avatar}
                isDealer={player.isDealer}
                wallet={1000}
              />
            </div>
          )
        })}
      </div>
    )
  }

export default PlayerList
