export const initialState = {
    todos = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'plan how to build a todo list',
        completed: false,
        id: 3892987588
    }
    ]
}

export function reducer(state, action) {

    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                item: action.payload
            }
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                completed: !state.todos.completed
            }
        // case 'CLEAR_COMPLETE':
        //     return {
        //         ...state,
        //         completed: 
        //     }
        default:
            return state;
    }
}