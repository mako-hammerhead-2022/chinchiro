import React, { useState } from 'react'

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

  // Set rank of roll

  const scoreRank = [
    '',
    '1-2-3',
    'pisser',
    'bust',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '4-5-6',
    '2-2-2',
    '3-3-3',
    '4-4-4',
    '5-5-5',
    '6-6-6',
    '1-1-1',
  ]

  // initial dice value
  const [dice1Value, setDice1Value] = useState(0)
  const [dice2Value, setDice2Value] = useState(0)
  const [dice3Value, setDice3Value] = useState(0)

  const [rollP1, setRollP1] = useState([0, 0, 0])

  let dice1 = dice1Value
  let dice2 = dice2Value
  let dice3 = dice3Value

  function rollDiceP1() {
    let newArray = orderDice(dice1, dice2, dice3)
    console.log(newArray)
    // Set Dice Values
    setDice1Value(getRandomNum(1, 7))
    setDice2Value(getRandomNum(1, 7))
    setDice3Value(getRandomNum(1, 7))

    // Store Roll
    setRollP1([newArray[0], newArray[1], newArray[2]])

    //If dice roll contains a triple
    if (dice1 == dice2 && dice1 == dice3) {
      if (dice1 != 1) {
        console.log('triple x3!')
        return 'x3'
      } else {
        console.log('triple ones x5!')
        return 'x5'
      }
    }

    //If dice roll contains a double
    if (dice1 == dice2) {
      console.log(dice3, 'points')
      return dice3
    } else if (dice1 == dice3) {
      console.log(dice2, 'points')
      return dice2
    } else if (dice2 == dice3) {
      console.log(dice1, 'points')
      return dice1
    }

    //if dice roll is sequencial '1, 2, 3'
    if (newArray[0] == 1) {
      if (newArray[1] == 2 && newArray[2] == 3) {
        console.log('lose double bet!')
        return 'lose double bet!'
      }
    }

    //if dice roll is sequencial '4, 5, 6'
    if (newArray[0] == 4) {
      if (newArray[1] == 5 && newArray[2] == 6) {
        console.log('Win double bet!')
        return 'win double bet!'
      }
    }
    console.log('bust')
    return 'bust'
  }

  function orderDice(D1, D2, D3) {
    console.log('Old Order', D1, D2, D3)
    let newD1 = D1
    let newD2 = D2
    let newD3 = D3

    //If first die is highest {5, 3, 1}
    if (D1 >= D2 && D1 >= D3) {
      if (D2 >= D3) {
        newD1 = D3
        newD2 = D2
        newD3 = D1
      } else if (D3 >= D2) {
        newD1 = D2
        newD2 = D3
        newD3 = D1
      }
    }
    //if middle die is highest {1,5,2}
    else if (D2 >= D1 && D2 >= D3) {
      if (D1 >= D3) {
        newD1 = D3
        newD2 = D1
        newD3 = D2
      } else if (D3 >= D1) {
        newD1 = D1
        newD2 = D3
        newD3 = D2
      }
    }
    //if last die is highest {1, 4, 5}
    else if (D3 >= D1 && D3 >= D2) {
      if (D1 >= D2) {
        newD1 = D2
        newD2 = D1
        newD3 = D3
      } else if (D2 >= D1) {
        newD1 = D1
        newD2 = D2
        newD3 = D3
      }
    }
    console.log('New Order', newD1, newD2, newD3)
    return [newD1, newD2, newD3]
  }

  const [dice1ValueP2, setDice1ValueP2] = useState(0)
  const [dice2ValueP2, setDice2ValueP2] = useState(0)
  const [dice3ValueP2, setDice3ValueP2] = useState(0)
  const [rollP2, setRollP2] = useState([0, 0, 0])

  let dice1P2 = dice1ValueP2
  let dice2P2 = dice2ValueP2
  let dice3P2 = dice3ValueP2

  function rollDiceP2() {
    // Set Dice Values
    setDice1ValueP2(getRandomNum(1, 7))
    setDice2ValueP2(getRandomNum(1, 7))
    setDice3ValueP2(getRandomNum(1, 7))

    // Store Roll
    setRollP2([dice1P2, dice2P2, dice3P2])
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
      <div>
        <h1>Dealer:</h1>
        <div>
          <img src={diceImage[rollP2[0]]} alt="Player 2, Dice 1" />
          <img src={diceImage[rollP2[1]]} alt="Player 2, Dice 1" />
          <img src={diceImage[rollP2[2]]} alt="Player 2, Dice 1" />
        </div>
      </div>
    </div>
  )
}

export default Dice
