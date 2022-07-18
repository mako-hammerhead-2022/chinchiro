import React from 'react'

import Counter from './Counter'
import Dice from './Dice'
import { useDispatch } from 'react-redux'
import { addToWallet, removeFromWallet } from '../reducers/players'

function Player(props) {
  
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <img
          className="avatar-container"
          src={props.avatar}
          alt="player avatar"
        ></img>
        <h1>{props.name}</h1>
      </div>
      <div>
        <h2>Wallet: {props.wallet}</h2>
        <button onClick={() => dispatch(addToWallet(props.id, calcResults(props.bet, props.result)))}>
          ADD WINNINGS
        </button>
        <button onClick={() => dispatch(removeFromWallet(props.id, calcResults(props.bet, props.result)))}>
          DEDUCT FROM WALLET
        </button>
      </div>
      <Dice id={props.id} dice={props.dice} />
      {props.isDealer ? (
        <h1>YOU ARE THE DEALER</h1>
      ) : (
        <Counter id={props.id} bet={props.bet} />
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
      return 0
    default:
      return 0
  }
}

export default Player
