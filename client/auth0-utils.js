import { useDispatch, useSelector } from 'react-redux'
import { subscribe } from 'superagent'
import { setLoggedInUser } from './actions/loggedInUser'

// eslint-disable-next-line no-unused-vars
export async function cacheUser(useAuth0) {
  const dispatch = useDispatch()
  const loggedInUser = useSelector((state) => state.loggedInUser)

  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()

  if (isAuthenticated && !loggedInUser?.token) {
    try {
      const accessToken = await getAccessTokenSilently()
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: accessToken,
      }

      dispatch(setLoggedInUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
