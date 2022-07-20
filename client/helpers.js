import { useAuth0 } from '@auth0/auth0-react'
import * as api from './apiClient'

export function postWinningsToDB(id, amount) {
  console.log('posting')
  console.log(id, amount)
  let data = [id, amount]
  api
    .updateUserEarnings(data)
    .then((result) => {
      return null
    })
    .catch((err) => {
      console.log(err)
    })
}
