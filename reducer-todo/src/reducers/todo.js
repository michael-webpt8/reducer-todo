export const initialState = {
 item: '',
 todos = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        item: action.payload
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        completed: !state.todos.completed
      };
    // case 'CLEAR_COMPLETE':
    //     return {
    //         ...state,
    //         completed:
    //     }
    default:
      return state;
  }
}
