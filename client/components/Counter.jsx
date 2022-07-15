import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'

const Counter = (props) => {
  // const dispatch = useDispatch()
  const [bet, setBet] = useState(0)

  function addBet(amount) {
    setBet((bet) => (bet + amount > 0 ? bet + amount : 0))
  }

  return (
    <div>
      <h2>
        Amount: $<span>{bet}</span>
      </h2>
      <div>
        <button onClick={() => addBet(1)}>+1</button>
        <button onClick={() => addBet(5)}>+5</button>
        <button onClick={() => addBet(10)}>+10</button>

        <button onClick={() => addBet(-1)}>{-1}</button>
        <button onClick={() => addBet(-5)}>{-5}</button>
        <button onClick={() => addBet(-10)}>{-10}</button>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => setBet(0)}>Reset Amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
