import React from 'react';
import Todo from './Todo';
import { initialTodos } from '../reducers/todo';

function Todos(props) {
  const { initialTodos } = props;
  return (
    <div>
      <ul>
        {initialTodos.map(todo => (
          <li key={todo.id}>
            <label>{todo.item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
