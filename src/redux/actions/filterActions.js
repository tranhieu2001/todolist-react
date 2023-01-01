export const switchFilter = (filter) => {
  return {
    type: 'SWITCH',
    filter,
  }
}

export const setSearchInput = (payload) => {
  return {
    type: 'SETSEARCHINPUT',
    payload,
  }
}

export const setPriorityFilter = (payload) => {
  return {
    type: 'SETPRIORITY',
    payload,
  }
}
