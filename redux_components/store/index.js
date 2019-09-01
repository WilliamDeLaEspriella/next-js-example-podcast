import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers, // todos los reducers
  {},
  composeWithDevTools(applyMiddleware(reduxThunk)) // estado incial
);

export const Store = ({children}) =>(
  <Provider store={store}>
    {children}
  </Provider>
)




