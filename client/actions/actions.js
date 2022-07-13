import Counter from '../components/Counter'
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
