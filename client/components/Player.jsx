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
  completeTurn,
  rotateDealer,
  resetTurn,
} from '../reducers/players'

function Player(props) {
  const players = useSelector((state) => state.players)

  console.log(props.result)

  const dispatch = useDispatch()

  const PlayerWin = (result) => {
    const currentDealer = players.find((player) => player.isDealer)
    const calculatedResult = calcResults(props.bet, result)
    console.log({ calculatedResult })
    dispatch(addToWallet(props.id, calculatedResult))
    dispatch(removeFromWallet(currentDealer.id, calculatedResult))
    dispatch(removeBet(props.id, props.bet))
    dispatch(rotateActive())
  }

  const DealerWin = () => {
    const currentDealer = players.find((player) => player.isDealer)
    const calculatedResult = calcResults(props.bet, currentDealer.result)
    dispatch(addToWallet(currentDealer.id, calculatedResult))
    dispatch(removeFromWallet(props.id, calculatedResult))
    dispatch(removeBet(props.id, props.bet))
    dispatch(rotateActive())
  }

  const PlayerDraw = () => {
    dispatch(removeBet(props.id, props.bet))
    dispatch(rotateActive())
  }

  const checkComplete = () => {
    const currentActiveId = players.find((player) => player.isActive).id
    const nextActiveId = currentActiveId + 1 > 3 ? 0 : currentActiveId + 1

    const checkedPlayer = players[nextActiveId]

    console.log(checkedPlayer, 'checked PLayer')

    if (checkedPlayer.completeTurn == true) {
      dispatch(resetTurn())
      dispatch(rotateDealer())
      dispatch(rotateActive())
      dispatch(rotateActive())
      console.log('set complete turn to false')
    } else {
      dispatch(completeTurn(props.id))
    }
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
    console.log(currentDealer.result, 'current result dealer')
    console.log(activePlayerResult, 'current Active Player result')
    if (currentDealer.result == activePlayerResult) {
      return PlayerDraw()
    } else if (currentDealer.result > activePlayerResult) {
      return DealerWin(activePlayerResult)
    } else if (currentDealer.result < activePlayerResult) {
      return PlayerWin(activePlayerResult)
    } else return dispatch(removeBet(props.id, props.bet))
  }

  function checkNumRolls(rollCount, result) {
    if (props.isDealer == true) {
      if (rollCount === 2) {
        dispatch(resetRoll(props.id))
        checkComplete()
      } else if (result === 2) {
        dispatch(setRoll(props.id, props.roll))
      } else {
        dispatch(resetRoll(props.id))
        checkComplete()
      }
    } else if (props.isDealer == false) {
      if (rollCount === 2) {
        dispatch(resetRoll(props.id))
        checkComplete()
        return compareResults(result)
      } else if (result === 2) {
        dispatch(setRoll(props.id, props.roll))
      } else {
        dispatch(resetRoll(props.id))
        checkComplete()
        return compareResults(result)
      }
    }
  }

  return (
    <div className='card-container'>
      {props.wallet !== 0 ? (
        <React.Fragment>
          <div className='dice-result'>{diceRoll}</div>
          <div className='card-top'>
            <div className='user-info'>
              <img
                className='avatar-container card-avatar'
                src={props.avatar}
                alt='player avatar'
              ></img>
              <div className='username-wallet'>
                <h1 className='player-name'>{props.name}</h1>
                <h2 className='subhead'>Wallet: {props.wallet}</h2>
              </div>
            </div>
          </div>
          {props.isActive ? (<div>
        <p className='subhead'>YOUR TURN</p>
        <div className='card-dice'>
            <Dice
              id={props.id}
              dice={props.dice}
              checkRoll={checkNumRolls}
              roll={props.roll}
              result={props.result}
            />
          </div>
          </div>
      ) : (
        <p className='subhead'>NOT YOUR TURN</p>
      )}
          

          {/* or dice? */}
          {props.isDealer ? (<div>
            <h1 className='player-name'>DEALER</h1>
            <div className='card-dice'>
            <Dice
              id={props.id}
              dice={props.dice}
              checkRoll={checkNumRolls}
              roll={props.roll}
              result={props.result}
            />
          </div>
          </div>
          ) : (
            <div className='card-bottom'>
              <Counter id={props.id} bet={props.bet} />
            </div>
          )}
        </React.Fragment>
      ) : (
        <PlayerDead username={props.name} avatar={props.avatar} />
      )}
      
    </div>
  )
}

//Scores order [123, pisser, bust, 1, 2, 3, 4, 5, 6, 456, 222, 111]

function calcResults(bet, result) {
  console.log(result)
  switch (result) {
    case (result = 0):
      return bet * 2
    case (result = 1):
      return bet
    case (result = 2):
      return bet
    case (result = 3):
    case (result = 4):
    case (result = 5):
    case (result = 6):
    case (result = 7):
    case (result = 8):
      return bet
    case (result = 9):
      return bet * 2
    case (result = 10):
      return bet * 3
    case (result = 11):
      return bet * 5
    default:
      return bet
  }
}

export default Player
