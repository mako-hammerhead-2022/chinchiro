import * as api from './apiClient'

export function postWinningsToDB(id, amount) {
  console.log('posting')
  console.log(id, amount)
  let data = [id, amount]
  api
    .updateUserEarnings(data)
    .then(() => {
      return null
    })
    .catch((err) => {
      console.log(err)
    })
}
