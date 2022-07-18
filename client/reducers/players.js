import * as api from '../apiClient'

export function addToWallet(id, amount) {
  return {
    type: 'ADD_TO_WALLET',
    id,
    amount,
  }
}

export function removeFromWallet(id, amount) {
  return {
    type: 'REMOVE_FROM_WALLET',
    id,
    amount,
  }
}

export function addBet(id, amount) {
  return {
    type: 'ADD_BET',
    id,
    amount,
  }
}

export function removeBet(id, amount) {
  return {
    type: 'REMOVE_BET',
    id,
    amount,
  }
}

export function diceResult(id, result) {
  return {
    type: 'DICE_RESULT',
    id,
    result,
  }
}

export function rotateDealer() {
  return {
    type: 'ROTATE_DEALER',
  }
}

export function initiatePlayers(players) {
  return {
    type: 'INITIATE_PLAYERS',
    players,
  }
}

export function fetchPlayers() {
  return (dispatch) => {
    return api
      .getAllUsers()
      .then((players) => {
        dispatch(initiatePlayers(players))
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export default function playersReducer(state = null, action) {
  switch (action.type) {
    case 'INITIATE_PLAYERS':
      return action.players.map((player, index) => ({
        ...player,
        isDealer: false,
        wallet: 0,
        bet: 0,
        id: index,
      }))

    case 'START_GAME':
      return state.map((player) => {
        if (player.id === 0) {
          return { ...player, isDealer: true }
        } else return { ...player, isDealer: false }
      })

    case 'ADD_TO_WALLET':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            wallet: player.wallet + action.amount,
          }
        } else return player
      })

    case 'REMOVE_FROM_WALLET':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            wallet:
              player.wallet - action.amount > 0
                ? player.wallet - action.amount
                : 0,
          }
        } else return player
      })
    case 'ADD_BET':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            bet: player.bet + action.amount,
          }
        } else return player
      })

    case 'REMOVE_BET':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            bet:
              player.bet - action.amount > 0 ? player.bet - action.amount : 0,
          }
        } else return player
      })

    case 'DICE_RESULT':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            result: action.result,
          }
        } else return player
      })

    case 'ROTATE_DEALER':
      return getNewDealer(state)
    default:
      return state
  }
}

function getNewDealer(state) {
  const currentDealerId = state.find((player) => player.isDealer).id

  const nextDealerId = currentDealerId + 1 > 3 ? 0 : currentDealerId + 1

  return state.map((player) => {
    if (player.id === currentDealerId) {
      return { ...player, isDealer: false }
    } else if (player.id === nextDealerId) {
      return { ...player, isDealer: true }
    } else return player
  })
}
