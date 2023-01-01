const initState = {
  searchFilter: '',
  status: 'all',
  priority: '',
  filter: [
    {
      value: 'all',
      label: 'All',
      filter: (todo) => {
        return true
      },
    },
    {
      value: 'completed',
      label: 'Completed',
      filter: (todo) => {
        return todo.completed
      },
    },
    {
      value: 'todo',
      label: 'ToDo',
      filter: (todo) => {
        return !todo.completed
      },
    },
  ],
}

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SWITCH': {
      return {
        ...state,
        status: action.filter,
      }
    }

    case 'SETSEARCHINPUT':
      return {
        ...state,
        searchFilter: action.payload,
      }

    case 'SETPRIORITY': {
      return {
        ...state,
        priority: action.payload,
      }
    }

    default:
      return state
  }
}

export default filterReducer
