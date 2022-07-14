import * as dbUsers from '../db/users'

const knex = require('knex')
const testConfig = require('../db/knexfile').test
const testDb = knex(testConfig)

// beforeAll(() => {
//   return testDb.migrate.latest()
// })

// beforeEach(() => {
//   return testDb.seed.run()
// })

// describe('can get user data from db', () => {
//   test('gets username and avatar from db', () => {
//     return dbUsers.getUserByAuthId('auth0|123').then((user) => {
//       expect(user).toHaveProperty('username')
//       expect(user).toHaveProperty('avatar')
//       expect(user.username).toBe('bananalover')
//     })
//   })
// })
