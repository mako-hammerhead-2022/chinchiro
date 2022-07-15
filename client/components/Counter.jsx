import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCount,
  plusFiveCount,
  plusTenCount,
  decrementCount,
  resetCount,
  minusFiveCount,
  minusTenCount,
  setInitialState,
} from '../actions/actions'



const Counter = (props) => {
  const count = useSelector((state) => state.counter)
  

  const [bet,setBet] = useState(0)

  function handleSetBet(amount){
    setBet(bet + amount)
    props.func(bet)

  }

  const dispatch = useDispatch()

  return (
    <div>
      <h2>
        Amount: $<span>{bet}</span>
      </h2>
      <div>
        <button onClick={() => handleSetBet(1)}>+1</button>
        <button onClick={() => dispatch(plusFiveCount())}>+5</button>
        <button onClick={() => dispatch(plusTenCount())}>+10</button>
      
        <button onClick={() => dispatch(decrementCount())}>-1</button>
        <button onClick={() => dispatch(minusFiveCount())}>-5</button>
        <button onClick={() => dispatch(minusTenCount())}>-10</button>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          
            <button onClick={() => dispatch(setInitialState())}>START GAME</button>
          
          <button onClick={() => dispatch(resetCount())}>
            Reset Amount
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
