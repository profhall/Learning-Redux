import TodoList from "./Todo_List";
import {connect} from "react-redux";
import {VISIBILITY_FILTERS} from "../constants";
import {toggleTodo, delTodo} from "../redux/actions";

const getVisibleTodos = (todos, filter) =>{
    switch (filter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return todos.filter(t => t.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return todos.filter(t => !t.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return todos;
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

// const mapDispatchToProps = dispatch => {
//     return {
//         toggleTodo: id => {
//             dispatch(toggleTodo(id));
//         },
//         delTodo: id => {
//             dispatch(delTodo(id));
//         }
//     };
// };

/*Shorthand when the names ofthe actions and functions match*/
const mapDispatchToProps = {toggleTodo, delTodo};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList

