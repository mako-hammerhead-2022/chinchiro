import user from '../loggedInUser'
import { setLoggedInUser } from '../../actions/loggedInUser'
import { newUser } from '../../../test/fakeData'

describe('logged in user reducers', () => {
  const emptyUser = {
    auth0Id: '',
    email: '',
    token: '',
  }
  test('it should get the details for a logged in user', () => {
    const action = setLoggedInUser(newUser)
    const newState = user(emptyUser, action)
    expect(newState.email).toBe('alice@denton.com')
  })

  test.todo('check clear logged in user')
})
