import { createStore } from "redux";
import rootReducer from "./reducers";

/*
*
* The second argument allows us to use redux dev tools
* */

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());