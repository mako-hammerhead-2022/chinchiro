import playersReducer, {
  initiatePlayers,
  diceResult,
  addToWallet,
  removeFromWallet,
  rotateDealer,
  makeNextPlayerActive,
  addBet,
  removeBet,
} from '../players'
import { arrUsers, arrPlayers } from '../../../test/fakeData'

const players = arrUsers
describe('player reducer', () => {
  test('it should get players ready for a game', () => {
    const initialState = undefined
    const action = initiatePlayers(players)
    const newState = playersReducer(initialState, action)

    expect(newState[0]).toEqual({
      auth0_id: 'auth0|456',
      avatar: 'img/punk9052.png',
      bet: 0,
      email: 'henry@denton.com',
      id: 0,
      isActive: false,
      isDealer: false,
      loss_tally: 5,
      result: null,
      roll: 0,
      total_earnings: 84,
      username: 'henry',
      wallet: 1000,
      win_tally: 10,
    })
  })

  test('adds to the player wallet', () => {
    const state = arrPlayers
    const action = addToWallet(arrPlayers[0].id, 1000)
    const newState = playersReducer(state, action)
    expect(newState[0].wallet).toBe(2000)
  })

  test('deducts from the player wallet', () => {
    const state = arrPlayers
    const action = removeFromWallet(arrPlayers[0].id)
    const newState = playersReducer(state, action)
    expect(newState[0].result).toBe(0)
  })

  test('rotates the dealer', () => {
    const state = arrPlayers
    const action = rotateDealer()
    const newState = playersReducer(state, action)
    expect(newState[1].isDealer).toBe(true)
  })

  test('displays the result of the player roll', () => {
    const state = arrPlayers
    const action = diceResult(arrPlayers[0].id, 5)
    const newState = playersReducer(state, action)
    expect(newState[0].result).toBe(5)
  })

  test('makes next player active', () => {
    const action = makeNextPlayerActive(arrPlayers)
    expect(action[1].isActive).toBe(true)
  })

  test('add bet', () => {
    const state = arrPlayers
    const action = addBet(arrPlayers[0].id, 0)
    const newState = playersReducer(state, action)
    expect(newState[0].bet).toBe(0)
  })

  test('remove bet', () => {
    const state = arrPlayers
    const action = removeBet(arrPlayers[0].id)
    const newState = playersReducer(state, action)
    expect(newState[0].result).toBe(0)
  })
})
