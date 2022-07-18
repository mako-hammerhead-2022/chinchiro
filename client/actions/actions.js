// Score double
export function scoreDouble(newArray) {
  if (newArray[0] == newArray[1]) {
    console.log(newArray[2], 'points')
    return newArray[2]
  } else if (newArray[0] == newArray[2]) {
    console.log(newArray[1], 'points')
    return newArray[1]
  } else if (newArray[1] == newArray[2]) {
    console.log(newArray[0], 'points')
    return newArray[0]
  } else {
    return false
  }
}

//Score triple
export function scoreTriple(newArray) {
  if (newArray[0] == newArray[1] && newArray[0] == newArray[2]) {
    if (newArray[0] != 1) {
      console.log('triple x3!')
      return 'x3'
    } else if (newArray[0] == 1) {
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
      return '-x2'
    } else {
      return false
    }
  } else if (newArray[0] == 4) {
    if (newArray[1] == 5 && newArray[2] == 6) {
      console.log('Win double bet!')
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
    console.log('PISSER!')
    return 'pisser'
  } else {
    return false
  }
}

export function orderDice(rollArray) {
  console.log('Old Order', rollArray)
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

  console.log('New Order', newD1, newD2, newD3)
  return [newD1, newD2, newD3]
}
