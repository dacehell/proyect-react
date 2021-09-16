import { createStore, applyMiddleware } from "redux"; // applyMiddleware es para aplicar el thunk
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { loginReducer } from "./login";

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
export const store = createStore(
  rootReducer,
  composeWithDevTools(middlewareEnhancer)
);

// o de esta manera => export const store = createStore(rootReducer, applyMiddleware(thunk));
