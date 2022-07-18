import { combineReducers } from 'redux'

import * as types from './types'
import loggedInUser from './loggedInUser'
import playersReducer from '../reducers/players'

//I would move all reducers to their own folders

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.ADD_FIVE:
      return state + 5
    case types.ADD_TEN:
      return state + 10
    case types.DECREMENT:
      if (state - 1 <= 0) {
        return (state = 0)
      } else return state - 1
    case types.MINUS_FIVE:
      if (state - 5 <= 0) {
        return (state = 0)
      } else return state - 5
    case types.MINUS_TEN:
      if (state - 10 <= 0) {
        return (state = 0)
      } else return state - 10
    case types.RESET:
      return 0
    default:
      return state
  }
}

// Player Wallet

const playerWalletReducer = (state = 1000, { type, payload }) => {
  switch (type) {
    case types.INITIAL_WALLET:
      return payload
    case types.ADD_MONEY:
      return state + payload
    case types.DEDUCT_MONEY:
      if (state - payload <= 0) {
        return (state = 0)
      } else return state - payload
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  loggedInUser,
  playerWallet: playerWalletReducer,
  players: playersReducer,
}

export default combineReducers(reducers)
