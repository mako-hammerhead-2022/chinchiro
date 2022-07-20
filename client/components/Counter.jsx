import React from 'react'
import { useDispatch } from 'react-redux'
import { addBet, removeBet } from '../reducers/players'

// store with bets to work
// parent that gets those bet values
function Counter(props) {

  const dispatch = useDispatch()

  return (
    <div className="bet-container">
      <h2 className="subhead">
        Bet: $<span>{props.bet}</span>
      </h2>
      <div>
        <button onClick={() => dispatch(addBet(props.id, 1))}>+1</button>
        <button onClick={() => dispatch(addBet(props.id, 5))}>+5</button>
        <button onClick={() => dispatch(addBet(props.id, 10))}>+10</button>
        <button onClick={() => dispatch(addBet(props.id, 50))}>+50</button>

        <button onClick={() => dispatch(removeBet(props.id, 1))}>-1</button>
        <button onClick={() => dispatch(removeBet(props.id, 5))}>-5</button>
        <button onClick={() => dispatch(removeBet(props.id, 10))}>-10</button>
        <button onClick={() => dispatch(removeBet(props.id, 50))}>-50</button>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => dispatch(removeBet(props.id, props.bet))}>
            Reset Bet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
