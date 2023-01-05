export const filterListSelector = (state) => state.filter.filter
export const currentFilterSelector = (state) => state.filter.status

export const todoListSelector = (state) => {
  const currentFilter = currentFilterSelector(state)
  const currentSearch = state.filter.searchFilter.toLowerCase()
  const todoListFull = state.todo
  const currentPriority = state.filter.priority

  const todoListPriority = currentPriority
    ? todoListFull.filter(
        (todo) => todo.priority === currentPriority.toLowerCase()
      )
    : todoListFull

  const todoFilter = filterListSelector(state).find((filter) => {
    return filter.value === currentFilter
  })

  if (currentSearch) {
    return todoListPriority
      .filter((todoItem) => {
        return todoItem.todo.toLowerCase().includes(currentSearch)
      })
      .filter(todoFilter.filter)
  } else {
    return todoListPriority.filter(todoFilter.filter)
  }
}
