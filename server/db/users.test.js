import * as dbUsers from '../db/users'

const knex = require('knex')
const testConfig = require('../db/knexfile').test
const testDb = knex(testConfig)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('can get user data from db', () => {
  test('gets all the users from the db', () => {
    return dbUsers.getAllUsers().then((users) => {
      expect(users[0]).toHaveProperty('email')
      expect(users).toHaveLength(5)
    })
  })

  test('gets username and avatar from db', () => {
    return dbUsers.getUserByAuthId('auth0|123').then((user) => {
      expect(user).toHaveProperty('username')
      expect(user).toHaveProperty('avatar')
      expect(user.username).toBe('bananalover')
      expect(user.avatar).toBe('img/punk9052.png')
    })
  })
})

describe('can add or take away user quant', () => {
  test('adds wins to user account', () => {
    return dbUsers
      .updateUserWins('auth0|123', 0, testDb)
      .then(() => {
        return testDb('users').select().first().where('auth0_id', 'auth0|123')
      })
      .then((userDetails) => {
        expect(Number(userDetails.win_tally)).toBeGreaterThanOrEqual(5)
      })
  })

  test('adds money to user account', () => {
    return dbUsers
      .updateUserEarnings('auth0|123', 100, testDb)
      .then(() => {
        return testDb('users').select().first().where('auth0_id', 'auth0|123')
      })
      .then((userDetails) => {
        expect(userDetails.total_earnings).toBeGreaterThanOrEqual(150)
      })
  })
})
