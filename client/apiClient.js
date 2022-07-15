import request from 'superagent'

const url = '/api/v1'

export function updateUserWins(data) {
  return request
    .post(`${url}/users/tally`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('Successfully posted' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

export function updateUserEarnings(data) {
  return Promise.resolve('Successfully updated user earnings')
  // TODO: fix me
  // eslint-disable-next-line no-unreachable
  return request
    .post(`${url}/users/earnings`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('Successfully posted' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getUserInfo(authId) {
  return request
    .get(`${url}/users/${authId}`)
    .then((response) => {
      const userData = response.body
      return userData
    })
    .catch(logError)
}

export function getAllUsers() {
  return request
    .get(`${url}/users/allusers`)
    .then((response) => {
      const users = response.body
      return users
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function addUser(user) {
  console.log(user)
  return request.post(`${url}/users`).send(user).catch(logError)
}

function logError(err) {
  if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
