import nock from 'nock'
import { getAllUsers, getUserInfo } from './apiClient'
import { arrPlayers, userInfo } from '../test/fakeData'

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
    test.todo('POST /api', () => {})
  })
})
