import { combineReducers } from 'redux'

import * as types from './types'

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

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
}

export default combineReducers(reducers)
