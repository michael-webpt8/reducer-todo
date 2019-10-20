import React, { useState } from 'react';

function TodoForm(props) {
  const { createTodo } = props;
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const submithandler = e => {
    e.preventDefault();
    if (todo) {
      createTodo(todo);
    }
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
      </form>
    </>
  );
}
export default TodoForm;
