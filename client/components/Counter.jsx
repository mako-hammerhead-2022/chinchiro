import React from 'react'
import { useDispatch } from 'react-redux'
import { addBet } from '../reducers/players'

function Counter(props){
  const dispatch = useDispatch()

  return (
    <div>
      <h2>
        Bet: $<span>{props.bet}</span>
      </h2>
      <div>
        <button onClick={() => dispatch(addBet(props.id, 1))}>+1</button>
        <button onClick={() => dispatch(addBet(props.id, 5))}>+5</button>
        <button onClick={() => dispatch(addBet(props.id, 10))}>+10</button>

        <button >{-1}</button>
        <button >{-5}</button>
        <button >{-10}</button>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          <button>Reset Bet</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
