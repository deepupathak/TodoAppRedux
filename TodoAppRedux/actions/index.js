// In this app, actually there are only 3 actions happened
// 1- Add todo item
// 2- Toggling items and
// 3- Apply filters on items.

// So now we create action creators for these actions.


// Action for Adding todo items
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

// Action for setting up the filters
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

// Action for Toggling todo items
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}