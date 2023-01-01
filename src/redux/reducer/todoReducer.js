import { get, set } from '../../ulti/storage'

const TODO_KEY = 'todo'

const initState = get(TODO_KEY)

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      const newState = state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
      set(TODO_KEY, newState)
      return newState

    case 'ADD': {
      const newState = [
        ...state,
        {
          ...action.payload,
          completed: false,
        },
      ]
      set(TODO_KEY, newState)
      return newState
    }

    case 'DELETE': {
      const newState = state.filter((todo) => todo.id !== action.id)
      set(TODO_KEY, newState)
      return newState
    }

    case 'TOGGLEALL': {
      const notCompletedTodo = state.find((todo) => todo.completed === false)
      let newState
      if (notCompletedTodo) {
        newState = state.map((todo) => {
          return {
            ...todo,
            completed: todo.completed ? todo.completed : !todo.completed,
          }
        })
      } else {
        newState = state.map((todo) => {
          return {
            ...todo,
            completed: !todo.completed,
          }
        })
      }
      set(TODO_KEY, newState)
      return newState
    }

    case 'DELETECOMPLETED': {
      const newState = state.filter((todo) => {
        return !todo.completed
      })
      set(TODO_KEY, newState)
      return newState
    }

    default:
      return state
  }
}

export default todoReducer
