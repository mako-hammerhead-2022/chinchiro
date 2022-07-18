import playersReducer, { initiatePlayers, diceResult } from '../players'
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

  test.todo('adds to the player wallet')
  test.todo('deducts from the player wallet')
  test.todo('rotates the dealer')
  test('displays the result of the player roll', () => {
    const state = arrPlayers
    const action = diceResult(arrPlayers[0].id, 5)
    const newState = playersReducer(state, action)
    expect(newState[0].result).toBe(5)
  })
  test.todo('makes next player active')
})
