const connection = require('./connection')

module.exports = {
  userExists,
  getUserByName,
  createUser,
  getUserByAuthId,
  getAllUsers,
  updateUserWins,
  updateUserEarnings,
}

function getUserByAuthId(authId, db = connection) {
  return db('users')
    .select('username', 'avatar', 'win_tally', 'total_earnings')
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

async function getCurrentWinTally(authId, db = connection) {
  return db('users')
    .select('win_tally')
    .first()
    .where('auth0_id', authId)
    .then((result) => {
      return result
    })
}

async function updateUserWins(authId, amount, db = connection) {
  const current_wins = await getCurrentWinTally(authId)
  const updated_wins = Number(current_wins.win_tally) + amount

  return db('users')
    .update({ win_tally: updated_wins })
    .where('auth0_id', authId)
}

async function getCurrentEarnings(authId, db = connection) {
  return db('users')
    .select('total_earnings')
    .first()
    .where('auth0_id', authId)
    .then((result) => {
      return result
    })
}

async function updateUserEarnings(authId, amount, db = connection) {
  const current_earnings = await getCurrentEarnings(authId)
  const updated_earnings = Number(current_earnings.total_earnings) + amount
  return db('users')
    .update({ total_earnings: updated_earnings })
    .where('auth0_id', authId)
}
