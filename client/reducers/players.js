import * as api from '../apiClient'
import * as helper from '../helpers'

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

export function setRoll(id, roll) {
  return {
    type: 'SET_ROLL',
    id,
    roll,
  }
}

export function resetRoll(id) {
  return {
    type: 'RESET_ROLL',
    id,
  }
}

export function completeTurn(id) {
  return {
    type: 'COMPLETE_TURN',
    id,
  }
}

export function resetTurn() {
  return {
    type: 'RESET_TURN',
  }
}

export function rotateDealer() {
  return {
    type: 'ROTATE_DEALER',
  }
}

export function rotateActive() {
  return {
    type: 'CHANGE_PLAYER',
  }
}

export function setActive() {
  return {
    type: 'SET_ACTIVE',
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
        isActive: false,
        completeTurn: false,
        wallet: 1000,
        bet: 0,
        roll: 0,
        id: index,
        result: null, // should change to something, idk how it's being used, maybe 0?
      }))

    case 'START_GAME':
      return state.map((player) => {
        if (player.id === 0) {
          return { ...player, isDealer: true }
        } else return { ...player, isDealer: false }
      })

    case 'START_ACTIVE':
      return state.map((player) => {
        const currentDealerId = state.find((player) => player.isDealer).id
        if (player.id === currentDealerId + 1) {
          return { ...player, isActive: true }
        } else return { ...player, isActive: false }
      })

    case 'ADD_TO_WALLET':
      return state.map((player) => {
        if (player.id === action.id) {
          helper.postWinningsToDB(player.auth0_id, action.amount)
          return {
            ...player,
            wallet: player.wallet + action.amount,
          }
        } else return player
      })

    case 'REMOVE_FROM_WALLET':
      return state.map((player) => {
        if (player.id === action.id) {
          helper.postWinningsToDB(player.auth0_id, `-${action.amount}`)
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

    case 'SET_ROLL':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            roll: action.roll + 1,
          }
        } else return player
      })

    case 'RESET_ROLL':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            roll: 0,
          }
        } else return player
      })

    case 'COMPLETE_TURN':
      return state.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            completeTurn: true,
          }
        } else return player
      })
    case 'RESET_TURN':
      return state.map((player) => {
        if (player.completeTurn === true) {
          return {
            ...player,
            completeTurn: false,
          }
        } else return player
      })

    case 'ROTATE_DEALER':
      return getNewDealer(state)

    case 'CHANGE_PLAYER':
      return makeNextPlayerActive(state)

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

export function makeNextPlayerActive(state) {
  const currentActiveId = state.find((player) => player.isActive).id

  const nextActiveId = currentActiveId + 1 > 3 ? 0 : currentActiveId + 1

  return state.map((player) => {
    if (player.id === currentActiveId) {
      return { ...player, isActive: false }
    } else if (player.id === nextActiveId) {
      return { ...player, isActive: true }
    } else return player
  })
}
