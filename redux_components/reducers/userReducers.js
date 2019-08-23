import { CARGANDO, ERROR, LOGIN } from "../types/userTypes";
const INITAL_STATE = {
  users: [],
  user: {},
  cargando: false,
  error: undefined
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        cargando: false,
        error: undefined
      };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.error, cargando: false };
    default:
      return state;
  }
};
