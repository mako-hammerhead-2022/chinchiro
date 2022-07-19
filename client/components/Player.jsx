import React from 'react'

import Counter from './Counter'
import Dice from './Dice'
import { useDispatch , useSelector } from 'react-redux'
import { addToWallet, removeFromWallet } from '../reducers/players'


function Player(props) {

  const players = useSelector((state) => state.players)

  
  
  const dispatch = useDispatch()
  
  const PlayerWin = () => {
    const currentDealer = players.find((player) => player.isDealer)
    
    dispatch(addToWallet(props.id, calcResults(props.bet, props.result)))
    dispatch(removeFromWallet(currentDealer.id, calcResults(props.bet, props.result)))
  }

  const DealerWin = () => {
    const currentDealer = players.find((player) => player.isDealer)
    console.log(currentDealer.result)
    dispatch(addToWallet(currentDealer.id, calcResults(props.bet, currentDealer.result)))
    dispatch(removeFromWallet(props.id, calcResults(props.bet, currentDealer.result)))
  }

  return (
    <div>
      <div className="card-top">
        <div className="user-info">
          <img
            className="avatar-container"
            src={props.avatar}
            alt="player avatar"
          ></img>
          <h1>{props.name}</h1>
        </div>
        <div className="dice-result">{props.result}</div>
      </div>
      <div>
        <h2>Wallet: {props.wallet}</h2>
      </div>
      {props.isActive ? (
       <Dice id={props.id} dice={props.dice} />
      ) : ( <p>NOT YOUR TURN</p>
      )}
      {props.isDealer ? (
        <React.Fragment>
        <h1>YOU ARE THE DEALER</h1>
        <Dice id={props.id} dice={props.dice} />
        </React.Fragment>
      ) : (<>
        <Counter id={props.id} bet={props.bet} />
        <button onClick={PlayerWin}>
          WINNER
        </button>
        <button onClick={DealerWin}>
          LOSER
        </button>
        </>
      )}
   
    </div>
  )
}

function calcResults(bet, result) {
  switch (result) {
    case (result = 1):
    case (result = 2):
    case (result = 3):
    case (result = 4):
    case (result = 5):
    case (result = 6):
      return bet
    case (result = 'x3'):
      return bet * 3
    case (result = 'x5'):
      return bet * 5
    case (result = '-x2'):
      return bet * 2 
    case (result = 'x2'):
      return bet * 2
    case (result = 'pisser'):
      return bet
    default:
      return bet
  }
}

export default Player
