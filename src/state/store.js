import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import booksReducer from "./reducers/books-reducer";
// import { createEpicMiddleware } from "redux-observable";
// import combinedEpics from "./epics";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  books: booksReducer
});

// const epicMiddleware = createEpicMiddleware();

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(epicMiddleware))
// );

// epicMiddleware.run(combinedEpics);

// export default store;

const middlewares = applyMiddleware(logger, thunk);
const composeEnhancers = composeWithDevTools(middlewares);

const store = createStore(reducers, composeEnhancers);

export default store;
