const request = require('supertest')
const server = require('../server')
const db = require('../db/users')

const { arrTwoUsers } = require('../../test/fakeData')

jest.mock('../db/users')

beforeAll(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
})
afterAll(() => {
  console.error.mockRestore()
  jest.restoreAllMocks()
})

describe('POST /api/v1/users/tally/', () => {
  test('increases the amount of games won', () => {
    db.updateUserWins.mockReturnValue(Promise.resolve())
    return request(server)
      .post('/tally')
      .send('auth0|123', 'add', 100)
      .then((res) => {
        console.log(res.body)
        expect(res.status).toBe(201)
      })
  })
})
