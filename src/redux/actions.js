import {TOGGLE_TODO, SET_FILTER, ADD_TODO, DEL_TODO} from "./actionTypes";

// let nextTodoId = 10;

/*
Actions are function that just return action objects!!
Action creators
 */
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});


export const addTodo = todo => ({
    type: ADD_TODO,
    payload: { todo }
});

export const delTodo = id => ({
    type: DEL_TODO,
    payload: { id }
});