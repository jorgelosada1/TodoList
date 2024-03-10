import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../sass/TodoDetails.scss';

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function TodoDetails({ todos, deleteTodo }) {
  const { id } = useParams();
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return <div>No se encontró la tarea</div>;
  }

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="todo-details">
      <h1>Todo Details</h1>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Created at: {formatDate(todo.createdAt)}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/">Back to Todo List</Link>
    </div>
  );
}

export default TodoDetails;
