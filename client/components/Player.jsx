import React, { useState, useEffect } from 'react'

import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import {addToWallet,} from '../reducers/players'
import * as api from '../apiClient'

function Player(props) {
  
  /* const amount = useSelector((state) => state.counter) */

  const [amount, setAmount] = useState(0)
 
  const players = useSelector((state) => state.players)


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
  }, [user])

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

  function handleBetting() {
    // console.log()
  }

  const results = calcResults(amount, multiplier)

  let dealerElement = props.isDealer ? (
    <h1>YOU ARE THE DEALER</h1>
  ) : (
    <Counter func={handleBetting} />
  )

  return (
    <div>
      <div>
        <img
          className="avatar-container"
          src={props.avatar}
          alt="player avatar"
        ></img>
        <h1>{props.name}</h1>
      </div>
      <div>
        <h2>Wallet: {props.wallet}</h2>
        <button onClick={() => dispatch(addToWallet(props.id,200))}>
          ADD TO WINNINGS
        </button>
        <button >
          DEDUCT FROM WALLET
        </button>
      </div>
      <Dice />
      {dealerElement}
    </div>
  )
}

export default Player
