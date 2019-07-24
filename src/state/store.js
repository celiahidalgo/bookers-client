import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/user-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  usersStore: userReducer
});

const middlewares = applyMiddleware(logger, thunk);
const composeEnhancers = composeWithDevTools(middlewares);

const store = createStore(reducers, composeEnhancers);

export default store;
