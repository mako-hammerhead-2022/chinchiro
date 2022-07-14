import React from "react";
import Player from "./Player";
import '../styles/index.scss'



const PlayerList = (props) => {
  return (
    <div>
    {props.players.map((player) => {
      return (
        <div className="card" key={player.id}>
          <Player  name = {player.username} avatar = {player.avatar} />
        </div>
      )
    })}
  </div>)
}

export default PlayerList