import playersReducer, { initiatePlayers, diceResult, addToWallet, removeFromWallet, rotateDealer } from '../players'
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
      isDealer: false,
      loss_tally: 5,
      result: null,
      total_earnings: 84,
      username: 'henry',
      wallet: 0,
      win_tally: 10,
    })
  })

  test('adds to the player wallet', () => {
    const state = arrPlayers
    const action = addToWallet(arrPlayers[0].id, 1000)
    const newState = playersReducer(state, action)
    expect(newState[0].wallet).toBe(1000)
  })

  test('deducts from the player wallet', () => {
    const state = arrPlayers
    const action = removeFromWallet(arrPlayers[0].id)
    const newState = playersReducer(state, action)
    expect(newState[0].result).toEqual(0)
  })

  test('rotates the dealer', () => {
    const state = arrPlayers
    const action = rotateDealer()
    const newState = playersReducer(state, action)
    expect(newState[1].isDealer)
      .toBe(true)
  })

  test('displays the result of the player roll', () => {
    const state = arrPlayers
    const action = diceResult(arrPlayers[0].id, 5)
    const newState = playersReducer(state, action)
    expect(newState[0].result).toBe(5)
  })
  test.todo('makes next player active')
})
