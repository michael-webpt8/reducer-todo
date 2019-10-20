import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/todo';
import TodoForm from './components/TodoForm';

import './App.css';
import Todos from './components/Todos';

function App() {
  const initialTodos = [
    {
      id: 123456789,
      item: 'Learn React',
      completed: false
    },
    {
      id: 12345678,
      item: 'Learn UseReducer',
      completed: true
    },
    {
      id: 987654321,
      item: 'Learn Redux',
      completed: false
    }
  ];

  const [todoList, setTodoList] = useState(initialTodos);
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTodo = item => {
    setTodoList([...todoList, { id: Date.now(), item, completed: false }]);
  };

  // const ADD_TODO = dispatch({ type: 'ADD_TODO', payload: todoList });
  console.log('List', todoList);
  return (
    <div className='App'>
      <h1>Todo Reducer Style</h1>
      <TodoForm createTodo={createTodo} />
      <Todos initialTodos={initialTodos} />
    </div>
  );
}

export default App;
