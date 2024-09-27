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

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        item: action.payload,
        id: Date.now(),
        completed: false
      });
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
}
