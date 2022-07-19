import React from 'react'

import Counter from './Counter'
import Dice from './Dice'

import PlayerDead from './widgets/PlayerDead'

import { useDispatch, useSelector } from 'react-redux'
import { addToWallet, removeFromWallet } from '../reducers/players'

function Player(props) {
  const players = useSelector((state) => state.players)

  const dispatch = useDispatch()

  const PlayerWin = () => {
    const currentDealer = players.find((player) => player.isDealer)

    dispatch(addToWallet(props.id, calcResults(props.bet, props.result)))
    dispatch(
      removeFromWallet(currentDealer.id, calcResults(props.bet, props.result))
    )
  }

  const DealerWin = () => {
    const currentDealer = players.find((player) => player.isDealer)

    dispatch(
      addToWallet(
        currentDealer.id,
        calcResults(props.bet, currentDealer.result)
      )
    )
    dispatch(
      removeFromWallet(props.id, calcResults(props.bet, currentDealer.result))
    )

  }

  let diceRoll

  if (props.result == 2) {
    diceRoll = 'bust'
  } else {
    diceRoll = props.result

  }

  return (
    <div>
      {props.wallet !== 0 ? (
        <React.Fragment>
          <div className="card-top">
            <div className="user-info">
              <img
                className="avatar-container"
                src={props.avatar}
                alt="player avatar"
              ></img>
              <h1>{props.name}</h1>
            </div>
            <div className="dice-result">{diceRoll}</div>
          </div>
          <div>
            <h2>Wallet: {props.wallet}</h2>
          </div>
          <Dice id={props.id} dice={props.dice} />
          {/* or dice? */}
          {props.isDealer ? (
            <h1>YOU ARE THE DEALER</h1>
          ) : (
            <>
              <Counter id={props.id} bet={props.bet} />
              <button onClick={PlayerWin}>WINNER</button>
              <button onClick={DealerWin}>LOSER</button>
            </>
          )}
        </React.Fragment>
      ) : (
        <PlayerDead username={props.name} avatar={props.avatar} />
      )}
      {props.isActive ? <p>YOUR TURN</p> : <p>NOT YOUR TURN</p>}
    </div>
  )
}

function calcResults(bet, result) {
  switch (result) {
    case (result = 3):
    case (result = 4):
    case (result = 5):
    case (result = 6):
    case (result = 7):
    case (result = 8):
      return bet
    case (result = 10):
      return bet * 3
    case (result = 11):
      return bet * 5
    case (result = 0):
      return bet * 2
    case (result = 9):
      return bet * 2
    case (result = 1):
      return bet
    case (result = 2):
      return bet
    default:
      return bet
  }
}

export default Player
