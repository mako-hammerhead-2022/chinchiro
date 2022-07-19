import React from 'react'

import Counter from './Counter'
import Dice from './Dice'

import PlayerDead from './widgets/PlayerDead'

import { useDispatch, useSelector } from 'react-redux'
import { addToWallet, removeFromWallet, rotateActive, setRoll } from '../reducers/players'

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

  let diceRoll = displayRoll()

  function displayRoll() {
    switch (props.result) {
      case 0:
        return '-2x'
      case 1:
        return 'Pisser'
      case 2:
        return 'Bust'
      case 3:
        return '1'
      case 4:
        return '2'
      case 5:
        return '3'
      case 6:
        return '4'
      case 7:
        return '5'
      case 8:
        return '6'
      case 9:
        return 'x2'
      case 10:
        return 'x3'
      case 11:
        return 'x5'
    }
  }

  function checkNumRolls(roll, result) {
    console.log('roll count is : '+ roll)
    console.log('result code is: ' + result)
    if(roll === 3) {
      return dispatch(rotateActive())
    }else if(result === 2) {
      console.log("this should be bust")
      dispatch(setRoll(props.id,props.roll))
    }else return dispatch(rotateActive())

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
          <Dice id={props.id} dice={props.dice} checkRoll={checkNumRolls} roll={props.roll} result={props.result}/>
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

//Scores order [123, pisser, bust, 1, 2, 3, 4, 5, 6, 456, 222, 111]

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
