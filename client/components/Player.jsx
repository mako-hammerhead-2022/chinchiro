import React, { useEffect } from 'react'
import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import { addToWallet, deductFromWallet } from '../actions/actions'
import * as api from '../apiClient'

function Player() {
  const wallet = useSelector((state) => state.playerWallet)
  const amount = useSelector((state) => state.counter)

  const user = useSelector((state) => state.loggedInUser)

  let multiplier = 1

  useEffect(() => {
    if (user !== '') {
      let data = [user.auth0Id, amount]
      api
        .updateUserEarnings(data)
        .then((result) => {
          return null
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log('No user')
    }
  }, [wallet, user])

  useEffect(() => {
    if (wallet === 0) {
      let data = [user.auth0Id, -1]
      api
        .updateUserWins(data)
        .then((result) => {
          console.log(result)
          return null
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      return
    }
  }, [wallet, user])
  
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
