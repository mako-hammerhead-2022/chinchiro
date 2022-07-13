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

// Score double
export function scoreDouble(dice1, dice2, dice3) {
  if (dice1 == dice2) {
    console.log(dice3, 'points')
    return dice3
  } else if (dice1 == dice3) {
    console.log(dice2, 'points')
    return dice2
  } else if (dice2 == dice3) {
    console.log(dice1, 'points')
    return dice1
  } else {
    return false
  }
}

//Score triple
export function scoreTriple(dice1, dice2, dice3) {
  if (dice1 == dice2 && dice1 == dice3) {
    if (dice1 != 1) {
      console.log('triple x3!')
      return 'x3'
    } else if (dice1 == 1) {
      console.log('triple ones x5!')
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
      console.log('lose double bet!')
      return 'lose double bet!'
    }
  } else if (newArray[0] == 4) {
    if (newArray[1] == 5 && newArray[2] == 6) {
      console.log('Win double bet!')
      return 'win double bet!'
    }
  } else {
    return false
  }
}

//score Pisser
export function checkPisser(pisser) {
  if (pisser == 99) {
    console.log('PISSER!')
    return 'PISSER!'
  } else {
    return false
  }
}

//score Bust
export function scoreBust(dice1, dice2, dice3, newArray, pisser) {
  if (scoreDouble(dice1, dice2, dice3) == false) {
    if (scoreTriple(dice1, dice2, dice3) == false) {
      if (scoreRun(newArray) == false) {
        if (checkPisser(pisser) == false) {
          console.log('bust')
          return 'bust'
        }
      }
    }
  }
}
