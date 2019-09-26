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
        //this is the method I'll use for keyts
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
            let max_id = Math.max(...state.map(todo => todo.id));
            //state.push doesn't work in this case because ...
            const newTodo ={
                id: max_id+=1,
                title: action.payload.todo,
                completed: false
            };
            API.post('/', newTodo);
            return state.concat(newTodo)
        }
        case DEL_TODO:{
            API.delete(`/${action.payload.id}`)
            return state.filter(todo => todo.id !== action.payload.id)
        }
        default:
            return state;
    }
}