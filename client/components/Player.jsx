import React from 'react'
import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToWallet,
  deductFromWallet,
} from '../actions/actions'


function Player() {
  
  const wallet = useSelector((state) => state.playerWallet)
  const amount = useSelector((state) => state.counter)
  let multiplier = 3

  const dispatch = useDispatch()

  function calcResults(bet, num) {
    switch (num) {
    case num = 1:
      return bet
    case num = 2:
      return bet * 2
    case num = 3:
      return bet * 3  
    case num = 5:
      return bet * 5  
    default:
      return 0
    }
  }
    
  const results = calcResults(amount, multiplier)

  return (
  <div>
    <h1>{wallet}</h1>
    <button onClick={()=> dispatch(addToWallet(results))}>ADD TO WINNINGS</button>
    <button onClick={()=> dispatch(deductFromWallet(results))}>DEDUCT FROM WALLET</button>
    <Dice/>
    <Counter/>
    </div>
  )

}



export default Player

