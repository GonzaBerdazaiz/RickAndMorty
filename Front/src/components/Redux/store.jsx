import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; //para conectar con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)) // para poder hacer peticiones a un server
);
export default store;
