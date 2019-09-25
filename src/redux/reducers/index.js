import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

/*
Reducer Composition

combineReducers combines all the reducers that are paseed to it,
because reducers work of switches, reducers will return a default when givin a key that's not
in its state
 */
export default combineReducers({ todos, visibilityFilter });