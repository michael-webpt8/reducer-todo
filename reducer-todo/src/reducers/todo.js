export const initialState = {
  task: 'new task',
  id: Date.now(),
  completed: false
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        task: action.payload,
        id: Date.now(),
        completed: false
      });
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    // case 'CLEAR_COMPLETE':
    //     return {
    //         ...state,
    //         completed:
    //     }
    default:
      return state;
  }
}
