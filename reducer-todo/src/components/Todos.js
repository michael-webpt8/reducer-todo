import React from 'react';

function Todos(props) {
  const { TOGGLE_COMPLETE, state } = props;

  return (
    <div>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => TOGGLE_COMPLETE(todo)}
            />
            <label className={todo.completed ? 'completed' : null}>
              {todo.item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
