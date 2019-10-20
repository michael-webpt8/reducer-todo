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

  const [todoList, setTodoList] = useState(initialTodos);
  const [state, dispatch] = useReducer(reducer, initialTodos);

  const createTodo = task => dispatch({ type: 'ADD_TODO', payload: task });

  const toggleComplete = id => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  // const ADD_TODO = dispatch({ type: 'ADD_TODO', payload: todoList });
  console.log('List', todoList);
  console.log('reduce state', state);
  return (
    <div className='App'>
      <h1>Todo Reducer Style</h1>
      <TodoForm createTodo={createTodo} />
      <Todos
        initialTodos={initialTodos}
        state={state}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
