import { combineReducers } from 'redux'

import todoReducer from './reducer/todoReducer'
import filterReducer from './reducer/filterReducer'

export const allReducers = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
})