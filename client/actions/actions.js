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

// Score double
export function scoreDouble(newArray) {
  if (newArray[0] == newArray[1]) {
    // console.log(newArray[2], 'points')
    return newArray[2]
  } else if (newArray[0] == newArray[2]) {
    // console.log(newArray[1], 'points')
    return newArray[1]
  } else if (newArray[1] == newArray[2]) {
    // console.log(newArray[0], 'points')
    return newArray[0]
  } else {
    return false
  }
}

//Score triple
export function scoreTriple(newArray) {
  if (newArray[0] == newArray[1] && newArray[0] == newArray[2]) {
    if (newArray[0] != 1) {
      // console.log('triple x3!')
      return 'x3'
    } else if (newArray[0] == 1) {
      // console.log('triple ones x5!')
      return 'x5'
    }
  } else {
    return false
  }
}

//Score 1,2,3
export function scoreRun(newArray) {
  if (newArray[0] == 1) {
    if (newArray[1] == 2 && newArray[2] == 3) {
      // console.log('lose double bet!')
      return '-x2'
    } else {
      return false
    }
  } else if (newArray[0] == 4) {
    if (newArray[1] == 5 && newArray[2] == 6) {
      // console.log('Win double bet!')
      return 'x2'
    } else {
      return false
    }
  } else {
    return false
  }
}

//score Pisser
export function checkPisser(pisser) {
  if (pisser == 99) {
    // console.log('PISSER!')
    return 'pisser'
  } else {
    return false
  }
}

//score Bust
export function scoreBust(newArray, pisser) {
  if (checkPisser(pisser) == false) {
    if (scoreRun(newArray) == false) {
      if (scoreTriple(newArray) == false) {
        if (scoreDouble(newArray) == false) {
          // console.log('bust')
          return 'bust'
        }
      }
    }
  } else {
    return true
  }
}

export function orderDice(rollArray) {
  // console.log('Old Order', rollArray)
  let newD1 = rollArray[0]
  let newD2 = rollArray[1]
  let newD3 = rollArray[2]

  //If first die is highest {5, 3, 1}
  if (rollArray[0] >= rollArray[1] && rollArray[0] >= rollArray[2]) {
    if (rollArray[1] >= rollArray[2]) {
      newD1 = rollArray[2]
      newD2 = rollArray[1]
      newD3 = rollArray[0]
    } else if (rollArray[2] >= rollArray[1]) {
      newD1 = rollArray[1]
      newD2 = rollArray[2]
      newD3 = rollArray[0]
    }
  }
  //if middle die is highest {1,5,2}
  else if (rollArray[1] >= rollArray[0] && rollArray[1] >= rollArray[2]) {
    if (rollArray[0] >= rollArray[2]) {
      newD1 = rollArray[2]
      newD2 = rollArray[0]
      newD3 = rollArray[1]
    } else if (rollArray[2] >= rollArray[0]) {
      newD1 = rollArray[0]
      newD2 = rollArray[2]
      newD3 = rollArray[1]
    }
  }
  //if last die is highest {1, 4, 5}
  else if (rollArray[2] >= rollArray[0] && rollArray[2] >= rollArray[1]) {
    if (rollArray[0] >= rollArray[1]) {
      newD1 = rollArray[1]
      newD2 = rollArray[0]
      newD3 = rollArray[2]
    } else if (rollArray[1] >= rollArray[0]) {
      newD1 = rollArray[0]
      newD2 = rollArray[1]
      newD3 = rollArray[2]
    }
  }

  // console.log('New Order', newD1, newD2, newD3)
  return [newD1, newD2, newD3]
}

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
