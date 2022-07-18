import playersReducer, { initiatePlayers } from '../players' //why one in object brackets but not other?
import { arrUsers } from '../../../test/fakeData'

const players = arrUsers

describe('player reducer', () => {
  test('it should get players ready for a game', () => {
    const action = initiatePlayers(players)
    const newState = playersReducer(undefined, action)
    expect(newState[0].userName).toBe('henry')
  })

  test.todo('starts the game')
  test.todo('adds to the player wallet')
  test.todo('deducts from the player wallet')
  test.todo('rotates the dealer')
})
