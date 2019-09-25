import React from 'react'
// import { delTodo } from '../redux/actions';

const Todo = ({ todo, toggleTodo, delTodo }) => (
    <li>
    <span onClick={() => toggleTodo(todo.id)}
    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
    >
        {todo.title}
    </span>
        <button onClick={() =>delTodo(todo.id) }>Delete</button>
    </li>
);

export default Todo