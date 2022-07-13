import React, {useState} from "react";

const Dice = () => {

  const diceImage = ['','/dice1.png','/dice2.png','/dice3.png','/dice4.png','/dice5.png','/dice6.png']

  // Generate random number
  function getRandomNum(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min)

  }

  // Set rank of roll

  const scoreRank = ['','1-2-3', 'pisser', 'bust', '1', '2','3','4','5', '6', '4-5-6', '2-2-2', '3-3-3', '4-4-4', '5-5-5', '6-6-6', '1-1-1']

  // initial dice value
  const [dice1Value,setDice1Value] = useState(1)
  const [dice2Value,setDice2Value] = useState(1)
  const [dice3Value,setDice3Value] = useState(1)

  const [rollP1,setRollP1] = useState([0,0,0])
  
  let dice1 = dice1Value
  let dice2 = dice2Value
  let dice3 = dice3Value
  
  
  function rollDiceP1() {
   
    // Set Dice Values
    setDice1Value(getRandomNum(1,7))
    setDice2Value(getRandomNum(1,7))
    setDice3Value(getRandomNum(1,7))
    
    // Store Roll
    setRollP1([dice1,dice2,dice3])  
    
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
