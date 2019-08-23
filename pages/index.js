import Login from "./login";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "../redux_components/reducers";
export default class extends React.Component {
  render() {
    const store = createStore(
      reducers, // todos los reducers
      {},
      applyMiddleware(reduxThunk) // estado incial
    );
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
