import React from 'react'
import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import { addToWallet, deductFromWallet } from '../actions/actions'



function Player(props) {

  const wallet = useSelector((state) => state.playerWallet)
  const amount = useSelector((state) => state.counter)
  
  let multiplier = 1

  const dispatch = useDispatch()

  function calcResults(bet, num) {
    switch (num) {
      case (num = 1):
        return bet
      case (num = 2):
        return bet * 2
      case (num = 3):
        return bet * 3
      case (num = 5):
        return bet * 5
      default:
        return 0
    }
  }

  const results = calcResults(amount, multiplier)

  return (
    <div>
      <div >
        <img className='avatar-container' src={props.avatar} alt="player avatar"></img>
        <h1>{props.name}</h1>
        <h2>Wallet: {wallet}</h2>
      </div>
      <div>
        <button onClick={()=> dispatch(addToWallet(results))}>ADD TO WINNINGS</button>
        <button onClick={()=> dispatch(deductFromWallet(results))}>DEDUCT FROM WALLET</button>
      </div>
      <Dice/>
      <Counter/>
    </div>
  )
}
    
    


export default Player
