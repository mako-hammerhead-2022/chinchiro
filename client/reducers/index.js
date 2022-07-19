import { combineReducers } from 'redux'
import loggedInUser from './loggedInUser'
import playersReducer from '../reducers/players'

// COMBINED REDUCERS
const reducers = {
  loggedInUser,
  players: playersReducer,
}

export default combineReducers(reducers)
