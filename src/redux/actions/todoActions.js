export const toggle = (id) => {
  return { type: 'TOGGLE', id }
}

export const addTodo = (todo, priority, id) => {
  return {
    type: 'ADD',
    payload: { todo, priority, id },
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE',
    id,
  }
}

export const toggleAll = () => {
  return {
    type: 'TOGGLEALL',
  }
}

export const deleteCompleted = () => {
  return {
    type: 'DELETECOMPLETED',
  }
}