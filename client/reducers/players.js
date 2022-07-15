import request from 'superagent'
// const players = {
//   5: {
//     id: '5',
//     username: 'J Vince',
//     avatar: '/img/punk5822.png',
//     isDealer: false,
//     isActive: false,
//     wallet: 1000,
//   },
//   7: {
//     id: '8',
//     username: 'Timmy D',
//     avatar: '/img/punk7971.png',
//     isDealer: false,
//     isActive: false,
//     wallet: 1000,
//   },
//   3: {
//     id: 1,
//     username: 'Rupie',
//     avatar: '/img/punk8857.png',
//     isDealer: false,
//     isActive: false,
//     wallet: 1000,
//   },
//   4: {
//     id: 1,
//     username: 'Callum',
//     avatar: '/img/punk5822.png',
//     isDealer: false,
//     isActive: false,
//     wallet: 1000,
//   },
// }

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
    return request.get('/api/players').then((response) => {
      dispatch(initiatePlayers(response.body.players))
    })
  }
}

// talking between components that are far away is hard
// centralised place where state lives and everywhere talks to that
// source of truth for information that changes frequently
// that is needed by many places

// where should responsibility live?
export default function playersReducer(state = null, action) {
  switch (action.type) {
    case 'ADD_TO_WALLET':
      return {
        // #immutability
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
    case 'INITIATE_PLAYERS':
      return formatPlayers(action.players)
    default:
      return state
  }
}
// [{ id: 1 }, { id: 5 }] => { 1: {}, 5: {} }
function formatPlayers(players) {
  const playersObject = {}
  players.forEach((player) => {
    playersObject[player.id] = player
  })
  return playersObject
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
