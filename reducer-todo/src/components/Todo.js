import React from 'react';

const Todo = props => {
  const { item } = props.item;
  return (
    <>
      <li>{item}</li>
    </>
  );
};
export default Todo;
