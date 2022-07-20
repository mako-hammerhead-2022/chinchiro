import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { diceResult } from '../reducers/players'

import {
  scoreDouble,
  scoreRun,
  scoreTriple,
  checkPisser,
  orderDice,
  
} from '../actions/actions.js'

const Dice = (props) => {
  const dispatch = useDispatch()

  const diceImage = [
    '',
    '/dice1.png',
    '/dice2.png',
    '/dice3.png',
    '/dice4.png',
    '/dice5.png',
    '/dice6.png',
  ]

  // Generate random number
  function getRandomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  // state of all dice
  const [rollP1, setRollP1] = useState([1, 1, 1])

  function rollDiceP1() {
    let roll = orderDice([
      getRandomNum(1, 7),
      getRandomNum(1, 7),
      getRandomNum(1, 7),
    ])
    let pisser = getRandomNum(1, 200)

    props.checkRoll(props.roll, calcResult(roll, pisser))
    return calcResult(roll, pisser)
  }

  function calcResult(roll, pisser) {
    // calculate score and store as a value
    setRollP1(roll)
    if (scoreTriple(roll) == 'x3') {
      return 10
    } else if (scoreTriple(roll) == 'x5') {
      return 11
    } else if (scoreDouble(roll) != false) {
      return scoreDouble(roll)
    } else if (scoreRun(roll) == '-x2') {
      return 0
    } else if (scoreRun(roll) == 'x2') {
      return 9
    } else if (checkPisser(pisser) == 'pisser') {
      return 1
    } else {
      return 2
    }
  }

  return (
    <div>
      <div>
        <div>
          <img
            src={diceImage[rollP1[0]]}
            alt="Player 2, Dice 1"
            width={'50px'}
            height={'50px'}
          />
          <img
            src={diceImage[rollP1[1]]}
            alt="Player 2, Dice 1"
            width={'50px'}
            height={'50px'}
          />
          <img
            src={diceImage[rollP1[2]]}
            alt="Player 2, Dice 1"
            width={'50px'}
            height={'50px'}
          />
        </div>
        <button onClick={() => dispatch(diceResult(props.id, rollDiceP1()))}>
          ROLL THE DICE
        </button>
      </div>
    </div>
  )
}

export default Dice
