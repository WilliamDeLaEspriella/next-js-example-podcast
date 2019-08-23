import { CARGANDO, ERROR, LOGIN } from "../types/userTypes";
import { LoginRequest } from "../../api/index";

export const LoginUser = (email, password) => async dispatch => {
  dispatch({ type: CARGANDO });
  try {
    
    const result = await LoginRequest(email, password);
    console.log(result.headers.authorization)
    dispatch({ type: LOGIN, payload: result.data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.response.data.errors});
  }
};
