import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './Components/TodoList';
import TodoDetails from './Components/TodoDetails';
import NewTodo from './Components/NewTodo';
import './sass/App.scss'; 

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: uuidv4() }; 
    setTodos([...todos, todoWithId]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Router>
      <div className="app"> 
        <h1>Todo App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New Todo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<TodoList todos={todos} />}
          />
          <Route
            path="/new"
            element={<NewTodo addTodo={addTodo} />}
          />
          <Route
            path="/todo/:id"
            element={<TodoDetails todos={todos} deleteTodo={deleteTodo} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
