import * as types from '../reducers/types'

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// INCREMENT COUNTER BY 5
export const plusFiveCount = () => ({ type: types.ADD_FIVE })

// INCREMENT COUNTER BY 10
export const plusTenCount = () => ({ type: types.ADD_TEN })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// DECREMENT COUNTER BY 5
export const minusFiveCount = () => ({ type: types.MINUS_FIVE })

// DECREMENT COUNTER BY 10
export const minusTenCount = () => ({ type: types.MINUS_TEN })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })

// ADD TO WALLET
export const addToWallet = (betAmount) => ({
  type: types.ADD_MONEY,
  payload: betAmount,
})

// DEDUCT FROM WALLET
export const deductFromWallet = (betAmount) => ({
  type: types.DEDUCT_MONEY,
  payload: betAmount,
})

// SET INITIAL STATE
export const setInitialState = () => ({
  type: types.INITIAL_WALLET,
  payload: 1000,
})
