const request = require('supertest')
const server = require('../server')
const db = require('../db/users')

const { newUser, arrTwoUsers } = require('../../test/fakeData')

// SEND a request to the /example route
// WAIT for a response
// WHEN the response comes,
//     COMPARE it with what we expected it to be

jest.mock('../db/users')

describe('POST /api/v1/users/', () => {
  test('adds a new user to db', () => {
    db.createUser.mockReturnValue(Promise.resolve())
    return request(server)
      .post('/api/v1/users/')
      .send(newUser)
      .then((res) => {
        expect(res.status).toBe(201)
      })
  })
  //this keeps breaking
  test('increases the amount of games won', () => {
    db.updateUserWins.mockReturnValue(Promise.resolve())
    return request(server)
      .post('/api/v1/users/tally/')
      .send(['auth0|123', 100])
      .then((res) => {
        console.log(res.status)
        expect(res.status).toBe(204)
      })
  })
  test.todo('update user earnings')
})

describe('GET /api/v1/users', () => {
  test.todo('get all users from db')
  test.todo('get specific user by authId from db')
})
