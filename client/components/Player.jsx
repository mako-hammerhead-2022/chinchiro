import React, { useState, useEffect } from 'react'

import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import { addToWallet, removeFromWallet } from '../reducers/players'
import * as api from '../apiClient'

function Player(props) {
  console.log(props)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.loggedInUser)


  // useEffect(() => {
  //   if (user !== '') {
  //     let data = [user.auth0Id, 1000]
  //     api
  //       .updateUserEarnings(data)
  //       .then((result) => {
  //         return null
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   } else {
  //     console.log('No user')
  //   }
  // }, [user])

 

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
        <button onClick={() => dispatch(addToWallet(props.id, calcResults(props.bet, props.result)))}>
          ADD TO WINNINGS
        </button>
        <button onClick={() => dispatch(removeFromWallet(props.id, calcResults(props.bet, props.result)))}>
          DEDUCT FROM WALLET
        </button>
      </div>
      <Dice id={props.id} dice={props.dice} />
      {props.isDealer ? (
        <h1>YOU ARE THE DEALER</h1>
      ) : (
        <Counter id={props.id} bet={props.bet} />
      )}
    </div>
  )
}

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

export default Player
