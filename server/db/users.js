const connection = require('./connection')

module.exports = {
  userExists,
  getUserByName,
  createUser,
  getUserByAuthId,
  getAllUsers,
}

function getUserByAuthId(authId, db = connection) {
  console.log(authId)
  return db('users')
    .select('username', 'avatar')
    .first()
    .where('auth0_id', authId)
}

function getAllUsers(db = connection) {
  return db('users').select()
}

function userExists(username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then((count) => {
      return count[0].n > 0
    })
}

function getUserByName(username, db = connection) {
  return db('users').select().where('username', username).first()
}

function createUser(user, db = connection) {
  console.log(user)
  return db('users').insert(user)
}
