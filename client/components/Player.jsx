import React from 'react'

import Counter from './Counter'
import Dice from './Dice'

import PlayerDead from './widgets/PlayerDead'
import { playAudio } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToWallet,
  removeFromWallet,
  rotateActive,
  setRoll,
  resetRoll,
  removeBet,
} from '../reducers/players'

function Player(props) {
  const players = useSelector((state) => state.players)

  const dispatch = useDispatch()

  const PlayerWin = () => {
    const currentDealer = players.find((player) => player.isDealer)

    dispatch(addToWallet(props.id, calcResults(props.bet, props.result)))
    dispatch(
      removeFromWallet(currentDealer.id, calcResults(props.bet, props.result))
    )
    dispatch(removeBet(props.id, props.bet))
    dispatch(rotateActive())
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
    dispatch(removeBet(props.id, props.bet))
    dispatch(rotateActive())
  }

  const PlayerDraw = () => {
    dispatch(removeBet(props.id, props.bet))
    dispatch(rotateActive())
  }
// todo create instant loss function to call if player or dealer result is equal to '-x2'
  let diceRoll = displayRoll()

  function displayRoll() {
    switch (props.result) {
      case 0:
        playAudio('sounds/bust.wav')
        return '-2x'
      case 1:
        playAudio('sounds/bust.wav')
        return 'Pisser'
      case 2:
        playAudio('sounds/bust.wav')
        return 'Bust'
      case 3:
        playAudio('sounds/roll-number.wav')
        return '1'
      case 4:
        playAudio('sounds/roll-number.wav')
        return '2'

      case 5:
        playAudio('sounds/roll-number.wav')
        return '3'
      case 6:
        playAudio('sounds/roll-number.wav')
        return '4'
      case 7:
        playAudio('sounds/roll-number.wav')
        return '5'
      case 8:
        playAudio('sounds/roll-number.wav')
        return '6'
      case 9:
        playAudio('sounds/bonus.wav')
        return 'x2'
      case 10:
        playAudio('sounds/bonus.wav')
        return 'x3'
      case 11:
        playAudio('sounds/bonus.wav')
        return 'x5'
    }
  }

  function compareResults(activePlayerResult) {
    const currentDealer = players.find((player) => player.isDealer)
    console.log(currentDealer.result, "current result dealer")
    console.log(activePlayerResult, "current Active Player result")
    if(currentDealer.result == activePlayerResult) {
      
      return PlayerDraw()
    }else if(currentDealer.result > activePlayerResult) {
      return DealerWin()
    }else if (currentDealer.result < activePlayerResult){
      return PlayerWin()
    }else return dispatch(removeBet(props.id, props.bet))

  }

  function checkNumRolls(rollCount, result) {
    
    if(props.isDealer == true) {
      console.log('roll count is : ' + rollCount)
      console.log('result code is: ' + result)
      if (rollCount === 2) {
        dispatch(resetRoll(props.id))  
      } else if (result === 2) {
        console.log('this should be bust')
        dispatch(setRoll(props.id, props.roll))
      } else{ 
      dispatch(resetRoll(props.id))
      }
    } else if(props.isDealer == false) {
      console.log('roll count is : ' + rollCount)
      console.log('result code is: ' + result)
      if (rollCount === 2) {
        dispatch(resetRoll(props.id))
        return compareResults(result)
      } else if (result === 2) {
        console.log('this should be bust')
        dispatch(setRoll(props.id, props.roll))
      } else{ 
      dispatch(resetRoll(props.id))
      return  compareResults(result) 
      }

    }
  }
    

  return (
    <div className="card-container">
      {props.wallet !== 0 ? (
        <React.Fragment>
          <div className="dice-result">{diceRoll}</div>
          <div className="card-top">
            <div className="user-info">
              <img
                className="avatar-container card-avatar"
                src={props.avatar}
                alt="player avatar"
              ></img>
              <div className="username-wallet">
                <h1 className="player-name">{props.name}</h1>
                <h2 className="subhead">Wallet: {props.wallet}</h2>
              </div>
            </div>
          </div>
          <div className="card-dice">
            <Dice
              id={props.id}
              dice={props.dice}
              checkRoll={checkNumRolls}
              roll={props.roll}
              result={props.result}
            />
          </div>

          {/* or dice? */}
          {props.isDealer ? (
            <h1 className="player-name">DEALER</h1>
          ) : (
            <div className="card-bottom">
              <Counter id={props.id} bet={props.bet} />
              <button onClick={PlayerWin}>WINNER</button>
              <button onClick={DealerWin}>LOSER</button>
            </div>
          )}
        </React.Fragment>
      ) : (
        <PlayerDead username={props.name} avatar={props.avatar} />
      )}
      {props.isActive ? (
        <p className="subhead">YOUR TURN</p>
      ) : (
        <p className="subhead">NOT YOUR TURN</p>
      )}
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
    
    

