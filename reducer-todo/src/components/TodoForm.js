import React, { useState } from 'react';

function TodoForm() {
	const [todo, setTodo] = useState();
	const [todos, setTodos] = useState();

	const handleChange = () => {
		setTodo(todo);
	};

	const submithandler = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={submithandler}>
				<input
					type="text"
					onChange={handleChange}
					value={todo}
					placeholder="Add todo..."
				/>
				<br />
				<button type="submit">Add Todo</button>
			</form>
		</>
	);
}
export default TodoForm;
