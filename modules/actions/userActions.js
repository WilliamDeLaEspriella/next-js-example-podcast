import { CARGANDO, ERROR, LOGIN } from '../types/userTypes'
import { LoginRequest } from '../../api/index'

export const LoginUser = (email, password, activateAuth) => async dispatch => {
  dispatch({ type: CARGANDO })
  try {
    const result = await LoginRequest(email, password)
    window.localStorage.setItem('token', result.headers.authorization)
    console.log({ token: result.headers.authorization, lc: window.localStorage.getItem('token') })
    activateAuth(true)
    dispatch({ type: LOGIN, payload: result.data, jwt: result.headers.authorization })
  } catch (error) {
    console.log({ error })
    dispatch({ type: ERROR, error: error.response.data.errors })
  }
}
