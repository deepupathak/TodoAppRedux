import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      // console.log(todos,"<<----- All")
      return todos
    case 'SHOW_COMPLETED':
      // console.log(todos.filter(t => t.completed),"<<-------- Completed")
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      // console.log(todos.filter(t => !t.completed),"<<------------- Active")
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList