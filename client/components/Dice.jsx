import React, { useState, useEffect } from 'react'

import {
  scoreDouble,
  scoreRun,
  scoreTriple,
  checkPisser,
  scoreBust,
  orderDice,
} from '../actions/actions.js'

const Dice = () => {
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

  //generating player score
  let P1score = 0

  // initial dice value
  // state for each dice

  // state of all dice
  const [rollP1, setRollP1] = useState([1, 1, 1])

  function rollDiceP1() {
    let roll = [getRandomNum(1, 7), getRandomNum(1, 7), getRandomNum(1, 7)]
    
    let pisser = getRandomNum(1, 200)

    // calculate score and store as a value

    let score = calculateScore(roll)
    // round of betting
    // Store Roll
    setRollP1(roll)
    scoreDouble(newArray)
    scoreTriple(newArray)
    scoreRun(newArray)
    checkPisser(pisser)
    scoreBust(newArray, pisser)

    dispatch(rotateDealer())
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
        <button onClick={rollDiceP1}>ROLL THE DICE</button>
      </div>
    </div>
  )
}

export default Dice
