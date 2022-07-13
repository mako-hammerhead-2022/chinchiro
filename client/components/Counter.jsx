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
} from '../actions/actions'



const Counter = () => {
  const count = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Player 1</h1>
      <h2>
        Amount: $<span>{count}</span>
      </h2>
      <div
        style={{ marginRight: 10 }}
        variant="outlined"
        aria-label="outlined button group"
      >
        <button onClick={() => dispatch(incrementCount())}>+1</button>
        <button onClick={() => dispatch(plusFiveCount())}>+5</button>
        <button onClick={() => dispatch(plusTenCount())}>+10</button>
      </div>
      <div
        variant="outlined"
        aria-label="outlined button group"
        color="secondary"
      >
        <button onClick={() => dispatch(decrementCount())}>-1</button>
        <button onClick={() => dispatch(minusFiveCount())}>-5</button>
        <button onClick={() => dispatch(minusTenCount())}>-10</button>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          
            <button variant="contained">START GAME</button>
          
          <button variant="contained" onClick={() => dispatch(resetCount())}>
            Reset Amount
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
