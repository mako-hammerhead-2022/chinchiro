import request from 'superagent'

const url = '/api/v1'

// export function addFruit(fruit, token) {
//   return request
//     .post(`${rootUrl}/fruits`)
//     .set('authorization', `Bearer ${token}`)
//     .send({ fruit })
//     .then((res) => res.body.fruits)
//     .catch(logError)
// }

// export function updateFruit(fruit, token) {
//   return request
//     .put(`${rootUrl}/fruits`)
//     .set('authorization', `Bearer ${token}`)
//     .send({ fruit })
//     .then((res) => res.body.fruits)
//     .catch(logError)
// }

// export function deleteFruit(id, token) {
//   return request
//     .delete(`${rootUrl}/fruits/${id}`)
//     .set('authorization', `Bearer ${token}`)
//     .send()
//     .then((res) => res.body.fruits)
//     .catch(logError)
// }

export function getUserInfo(authId) {
  console.log(authId)
  return request
    .get(`${url}/users/${authId}`)
    .then((response) => {
      const userData = response.body
      return userData
    })
    .catch(logError)
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
