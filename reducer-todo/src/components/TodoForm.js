import React, { useState } from 'react';

function TodoForm(props) {
  const { ADD_TODO, CLEAR_COMPLETED } = props;
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const submithandler = e => {
    e.preventDefault();

    ADD_TODO(todo);

    console.log(todo);
    setTodo('');
  };
  return (
    <>
      <form onSubmit={submithandler}>
        <input
          type='text'
          onChange={handleChange}
          value={todo}
          placeholder='Add todo...'
        />
        <br />
        <button type='submit'>Add Todo</button>
        <button type='button' onClick={CLEAR_COMPLETED}>
          Clear Completed
        </button>
      </form>
    </>
  );
}
export default TodoForm;
