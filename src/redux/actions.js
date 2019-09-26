import axios from 'axios';
import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, SET_FILTER, DEL_TODO } from "./actionTypes";

export const API = axios.create({
    baseURL: 'http://localhost:4000/todos' //calling json server
});

/*
Actions are functions that just return action objects!!
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

/*When using async a wait two actions are need but only one is used from the outside
* the other is called by the main action
* fetchTodosSuccess is used inside fetchTodos
*
*  */
const fetchTodosSuccess = todos => ({
    type: FETCH_TODOS,
    todos
    //OR todos: todos
});
export const fetchTodos = () => (
    async dispatch => {
        try {
            /*
            How to get multiple await calls
                const responses = await Promise([API1.get(),API2.get()])
                >>> responses[0] & responses[1]
                const [response1, response2] = await Promise( [API1.get(),API2.get()] );
            */
            const response = await API.get();
            // {type:FETCH_TODOS, todos: todos }
            // I need to return an object from the function that dispatch is calling
            dispatch(fetchTodosSuccess(response.data));
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);