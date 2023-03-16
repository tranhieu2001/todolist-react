import { Button, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { deleteCompleted, toggleAll } from '../redux/actions/todoActions'
import { todoListSelector } from '../redux/selectors'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

function TodoList() {
  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector)
  const handleToggleAll = () => {
    dispatch(toggleAll())
  }

  const handleDeleteCompleted = () => {
    dispatch(deleteCompleted())
  }

  return (
    <Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography fontSize={16} fontWeight={700}>
          Todo List
        </Typography>
        <Button size="small" sx={{ height: '24px' }} onClick={handleToggleAll}>
          completed all
        </Button>
        <Button
          size="small"
          sx={{ height: '24px' }}
          onClick={handleDeleteCompleted}
        >
          delete completed
        </Button>
      </Stack>
      <Stack sx={{ height: '420px', overflowY: 'scroll' }}>
        {todoList.map((todoItem) => {
          return <TodoItem todoItem={todoItem} key={todoItem.id} />
        })}
      </Stack>
      <TodoInput />
    </Stack>
  )
}

export default TodoList
