
import React, {useState, useEffect}  from 'react'

import Counter from './Counter'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import { addToWallet, deductFromWallet } from '../actions/actions'
import * as api from '../apiClient'





function Player(props) {

 /*  const wallet = useSelector((state) => state.playerWallet)
  const amount = useSelector((state) => state.counter) */
  const player = useSelector((state) => state.players[props.playerId])
  const [amount, setAmount] = useState(0)

  const [individualWallet, setIndividualWallet] = useState(1000)
  
  let multiplier = 2


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
