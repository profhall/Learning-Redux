import {ADD_TODO, TOGGLE_TODO,DEL_TODO} from "../actionTypes";

const initialState = [
    {
        id: 1,
        title: 'master redux',
        completed: true
    },
    {
        id: 2,
        title: 'teach others',
        completed: false
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TODO: {
            return state.map(todo => todo.id === action.payload.id
                ? { ...todo, completed: !todo.completed }
                : todo)
        }
        case ADD_TODO:{
            console.log(state);
            console.log(action);
            let max_id = Math.max(...state.map(todo => todo.id));
            //state.push doesn't work in this case because ...
            return state.concat(
                {
                    id: max_id+=1,
                    title: action.payload.todo,
                    completed: false
                })
        }
        case DEL_TODO:{
            console.log(state)
            return state.filter(todo => todo.id !== action.payload.id)
        }
        default:
            return state;
    }
}