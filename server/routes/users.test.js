const request = require('supertest')
const server = require('../server')
const db = require('../db/users')

const { newUser, arrUsers } = require('../../test/fakeData')

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

  test('increases the amount of games won', () => {
    db.updateUserWins.mockReturnValue(Promise.resolve())
    return request(server)
      .post('/api/v1/users/tally/')
      .send(['auth0|123', 100])
      .then((res) => {
        expect(res.status).toBe(204)
      })
  })
  test('update user earnings', () => {
    db.updateUserEarnings.mockReturnValue(Promise.resolve())
    return request(server)
      .post('/api/v1/users/earnings')
      .send(['auth0|123', 100])
      .then((res) => {
        expect(res.status).toBe(204)
      })
  })
})

describe('GET /api/v1/users', () => {
  test('get all users from db', () => {
    db.getAllUsers.mockReturnValue(Promise.resolve(arrUsers))
    return request(server)
      .get('/api/v1/users/allusers')
      .then((res) => {
        expect(res.body).toHaveLength(4)
      })
  })

  test('get specific user by authId from db', () => {
    db.getUserByAuthId.mockReturnValue(Promise.resolve(newUser))
    const userId = newUser.auth0Id
    return request(server)
      .get(`/api/v1/users/${userId}`)
      .then((res) => {
        expect(db.getUserByAuthId).toHaveBeenCalledWith(userId)
        expect(res.body.auth0Id).toBe(userId)
      })
  })
})
