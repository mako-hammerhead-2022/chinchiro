import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCount,
  plusFiveCount,
  plusTenCount,
  decrementCount,
  resetCount,
  minusFiveCount,
  minusTenCount,
  totalCount,
} from '../actions'
import { Button, ButtonGroup } from '@mui/material'
import Link from 'next/link'

const Counter = () => {
  const count = useSelector((state) => state.counter)
  /* const total = useSelector((state) => state.total) */

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Player 1</h1>
      <h2>
        Amount: $<span>{count}</span>
      </h2>
      <ButtonGroup
        style={{ marginRight: 10 }}
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button onClick={() => dispatch(incrementCount())}>+1</Button>
        <Button onClick={() => dispatch(plusFiveCount())}>+5</Button>
        <Button onClick={() => dispatch(plusTenCount())}>+10</Button>
      </ButtonGroup>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        color="secondary"
      >
        <Button onClick={() => dispatch(decrementCount())}>-1</Button>
        <Button onClick={() => dispatch(minusFiveCount())}>-5</Button>
        <Button onClick={() => dispatch(minusTenCount())}>-10</Button>
      </ButtonGroup>
      <div>
        <ButtonGroup style={{ marginTop: 10 }}>
          <Link href={'./game'}>
            <Button variant="contained">START GAME</Button>
          </Link>
          <Button variant="contained" onClick={() => dispatch(resetCount())}>
            Reset Amount
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Counter
