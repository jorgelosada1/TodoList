import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/TodoList.scss';

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <Link className="add-todo-link" to="/new">Add New Todo</Link>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <Link className="todo-link" to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        )).reverse()}
      </ul>
    </div>
  );
}

export default TodoList;
