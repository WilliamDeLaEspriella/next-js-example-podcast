import { CARGANDO, ERROR, LOGIN } from "../types/userTypes";
import { LoginRequest } from "../../api/index";

export const LoginUser = (email, password) => async dispatch => {
  dispatch({ type: CARGANDO });
  try {
    
    const result = await LoginRequest(email, password);
    dispatch({ type: LOGIN, payload: result.data , jwt: result.headers.authorization});
  } catch (error) {
    dispatch({ type: ERROR, error: error.response.data.errors});
  }
};
