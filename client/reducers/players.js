import request from 'superagent'
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
    type: 'ADD_TO_WALLET',
    id,
    amount,
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

function formatPlayers(players) {
  const playersObject = {}
  players.forEach((player) => {
    playersObject[player.auth0_id] = player
  })
  return playersObject
}

export default function playersReducer(state = null, action) {
  switch (action.type) {
    case 'INITIATE_PLAYERS':
      return action.players.map((player) => ({ ...player, wallet: 0 }))
    default:
      return state

    case 'ADD_TO_WALLET':
      return {
        ...state, // other players - you HAVE to do this
        [action.id]: {
          // current player
          ...state[action.id], // rest of current players properties

          wallet: state[action.id].wallet + action.amount, // their wallet
        },
      }

    case 'REMOVE_FROM_WALLET':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          wallet: state[action.id].wallet - action.amount,
        },
      }

    case 'ROTATE_DEALER':
      return getNewDealer(state)
  }
}

function getNewDealer(state) {
  const currentDealer = Object.values(state).find(
    (player) => player.isDealer
  ).id

  const nextDealerId = currentDealer + 1 > 4 ? 1 : currentDealer + 1

  return {
    ...state,
    [currentDealer]: {
      ...state[currentDealer],
      isDealer: false,
    },
    [nextDealerId]: {
      ...state[nextDealerId],
      isDealer: true,
    },
  }
}
