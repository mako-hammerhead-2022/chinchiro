import React from 'react'
import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import { addToWallet, deductFromWallet } from '../actions/actions'

function Player() {
  const wallet = useSelector((state) => state.playerWallet)
  const amount = useSelector((state) => state.counter)

  //const value = Dice.rollDiceP1
  const value = 'x5'
  const dispatch = useDispatch()

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
        return bet * 2 * -1
      case (result = 'x2'):
        return bet * 2
      case (result = 'pisser'):
        return 0
      default:
        return 0
    }
  }

  const results = calcResults(amount, value)
  console.log(results, 'results')
  console.log(amount, 'amount')

  return (
    <div>
      <h1>{wallet}</h1>
      <button onClick={() => dispatch(addToWallet(results))}>
        ADD TO WINNINGS
      </button>
      <button onClick={() => dispatch(deductFromWallet(results))}>
        DEDUCT FROM WALLET
      </button>
      <Dice />
      <Counter />
    </div>
  )
}

export default Player
