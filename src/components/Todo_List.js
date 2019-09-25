import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, delTodo }) => {
    const todosList =
        todos.map(todo =>(
            <Todo key={todo.id} todo={todo} delTodo={delTodo} toggleTodo={toggleTodo}/>
            ));

    return (<ul>{todosList}</ul>)
};

export default TodoList;