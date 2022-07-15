import React, {useState}  from 'react'
import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import { addToWallet, deductFromWallet } from '../actions/actions'




function Player(props) {

 /*  const wallet = useSelector((state) => state.playerWallet)
  const amount = useSelector((state) => state.counter) */
  const player = useSelector((state) => state.players[props.playerId])
  const [amount, setAmount] = useState(0)

  const [individualWallet, setIndividualWallet] = useState(1000)
  
  let multiplier = 2

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

  function handleBetting(bet) {
    console.log(bet)
  }

  const results = calcResults(amount, multiplier)

  let dealerElement = props.isDealer ? <h1>YOU ARE THE DEALER</h1> : <Counter func={handleBetting}/>

  return (
    <div>
      <div >
        <img className='avatar-container' src={props.avatar} alt="player avatar"></img>
        <h1>{props.name}</h1>
        
      </div>
      <div>
        <h2>Wallet: {individualWallet}</h2>
        <button onClick={()=> setIndividualWallet(individualWallet + results)}>ADD TO WINNINGS</button>
        <button onClick={()=> setIndividualWallet(individualWallet - results)}>DEDUCT FROM WALLET</button>
      </div>
      <Dice />
      {dealerElement}
      
    </div>
  )
}
    
    


export default Player
