import axios from 'axios';
import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, SET_FILTER, DEL_TODO } from "./actionTypes";

export const API = axios.create({
    baseURL: 'http://localhost:4000/todos' //calling json server
});

/*
Actions are functions that just return action objects!!
Action creators

Axio Calls should always go in actions to avoid side effects
 */




/*Toggling Todos*/
// export const toggleTodoSuccess = id => ({
//     type: TOGGLE_TODO,
//     payload: { id }
// });

export const toggleTodoSuccess = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const toggleTodo = todo => (async dispatch =>{
    try {
        // getState() is the method I've been searching for!!
        const { todos } = getState()
        const todoToToggle = todos.find(todo => todo.id === id)
        await API.put(`/${id}`, { ...todoToToggle, completed: !todoToToggle.completed })
        console.log(todo)
        // API.put(`/${id}`, {..., });
        dispatch(toggleTodoSuccess(todo));
    } catch (error) {
        console.error(error);
    }

});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});


/*Adding Todos*/
export const addTodoSuccess = todo => ({
    type: ADD_TODO,
    payload: todo
});

export const addTodo = todo => (async dispatch => {
    try {
        // API.post('/', todo);
        const response = await API.get();
        let max_id = Math.max(...response.data.map(todo => todo.id));
        const newTodo ={
            id: max_id+=1,
            title: todo,
            completed: false
        };

        API.post('/', newTodo);
        dispatch(addTodoSuccess(newTodo));
    } catch (error) {
        console.error(error);
    }
});

/*Deleting Todos*/
export const delTodoSuccess = id => ({
    type: DEL_TODO,
    payload: { id }
});

export const delTodo = id => (async dispatch => {
    try {
        API.delete(`/${id}`)
        dispatch(delTodoSuccess(id));
    } catch (error) {
        console.error(error);
    }
});

/*When using async a wait two actions are need but only one is used from the outside
* the other is called by the main action
* fetchTodosSuccess is used inside fetchTodos
*
*  */
//Normal action creator, only normal action creators edit the state not async
const fetchTodosSuccess = todos => ({
    type: FETCH_TODOS,
    todos
    //OR todos: todos
});

//Async action creator
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

            // return response; //really don't need this, but it allows a caller function to know when it's done, good for using
        } catch (error) {
            console.error(error);
        }
    }
);