import React from 'react';

function Todos(props) {
  const { toggleComplete, state } = props;
  return (
    <div>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => toggleComplete(todo.id)}
            />
            <label>{todo.item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
