import {ADD_TODO, TOGGLE_TODO, DEL_TODO, FETCH_TODOS} from "../actionTypes";
import {API} from "../actions"

// const initialState = [
//     {
//         id: 1,
//         title: 'master redux',
//         completed: true
//     },
//     {
//         id: 2,
//         title: 'teach others',
//         completed: false
//     }
// ];

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {
        //this is the method I'll use for keys
        case FETCH_TODOS: {
            return action.todos;
        }
        case TOGGLE_TODO: {
            //filter to chosen todo
            state.map(todo => {
                if (todo.id === action.payload.id) {

                    API.put(`/${action.payload.id}`, {...todo, completed: !todo.completed});

                    return {...todo, completed: !todo.completed}
                }
                return todo
            });

            return state.map(todo => todo.id === action.payload.id
                ? { ...todo, completed: !todo.completed }
                : todo)
        }
        case ADD_TODO:{
            //state.push doesn't work in this case because ...
            return state.concat(action.payload)
        }
        case DEL_TODO:{
            //This is a problem, because this is a side effect and the reducer should be a pure function
            //API.delete(`/${action.payload.id}`)
            return state.filter(todo => todo.id !== action.payload.id)
        }
        default:
            return state;
    }
}