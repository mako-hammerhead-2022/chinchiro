import nock from 'nock'
import { getAllUsers, getUserInfo } from './apiClient'
import { arrPlayers, userInfo } from '../test/fakeData'

//on line 3 import user info from fakedata
// create scope variable like in the get all users test
//.get(change /allusers to an id (like 1)
//set up the reply as 200 and the userInfo
//run the return statement: getUserInfo(id)
//remember the .then() - you can put result or user or whatever in the ()
//console.log the response (whatever you called the .then())
//based on the console.log write you rassertion (expect bla bla )

describe('test GET API', () => {
  test('Get /api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users/allusers')
      .reply(200, arrPlayers)

    return getAllUsers().then((users) => {
      expect(users).toEqual(arrPlayers)
      scope.done()
      return null
    })
  })

  test('get userinfo', () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/users/1`)
      .reply(200, userInfo)
    return getUserInfo(1).then((users) => {
      expect(users).toEqual(userInfo)
      scope.done()
      return null
    })
  })

  describe('test POST API', () => {
    test('POST /api', () => {})
  })
})
