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
      completed: false
    },
    {
      id: 987654321,
      item: 'Learn Redux',
      completed: false
    }
  ];

  //   const [todoList, setTodoList] = useState(initialTodos);
  const [state, dispatch] = useReducer(reducer, initialTodos);

  const ADD_TODO = task => dispatch({ type: 'ADD_TODO', payload: task });

  const TOGGLE_COMPLETE = todo =>
    dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id });

  const CLEAR_COMPLETED = () => {
    console.log('clear');
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  console.log('reduce state', state);
  return (
    <div className='App'>
      <h1>Todo Reducer Style</h1>
      <TodoForm ADD_TODO={ADD_TODO} CLEAR_COMPLETED={CLEAR_COMPLETED} />
      <Todos
        initialTodos={initialTodos}
        state={state}
        TOGGLE_COMPLETE={TOGGLE_COMPLETE}
      />
    </div>
  );
}

export default App;
