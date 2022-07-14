import React, {useState,useEffect} from "react";

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

const Dice = () => {

  useEffect(() => {
    setDice1Value(1)
    setDice2Value(1)
    setDice3Value(1)
  },[]);

  const diceImage = ['','/dice1.png','/dice2.png','/dice3.png','/dice4.png','/dice5.png','/dice6.png']


  // Generate random number
  function getRandomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }


  //generating player score
  let P1score = 0

  // initial dice value
  const [dice1Value, setDice1Value] = useState(0)
  const [dice2Value, setDice2Value] = useState(0)
  const [dice3Value, setDice3Value] = useState(0)

  const [rollP1,setRollP1] = useState([1,1,1])
  
  let dice1 = dice1Value
  let dice2 = dice2Value
  let dice3 = dice3Value

  function rollDiceP1() {
    let newArray = orderDice(dice1, dice2, dice3)
    let pisser = getRandomNum(1, 200)

    // Set Dice Values

    setDice1Value(getRandomNum(1, 7))
    setDice2Value(getRandomNum(1, 7))
    setDice3Value(getRandomNum(1, 7))

    // Store Roll
    setRollP1([newArray[0], newArray[1], newArray[2]])
    scoreBust(newArray, pisser)
    scoreDouble(newArray)
    scoreTriple(newArray)
    scoreRun(newArray)
    checkPisser(pisser)
  }

  return (
    <div>

      <div>
        <h1>Player 1:</h1>
        <div>
          <img src={diceImage[rollP1[0]]} alt="Player 2, Dice 1" />
          <img src={diceImage[rollP1[1]]} alt="Player 2, Dice 1" />
          <img src={diceImage[rollP1[2]]} alt="Player 2, Dice 1" />
        </div>
        <button onClick={rollDiceP1}>ROLL THE DICE</button>
      </div>
     </div>
  )
}

export default Dice
