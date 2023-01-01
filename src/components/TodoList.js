import ClearIcon from '@mui/icons-material/Clear'
import { Button, Checkbox, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import {
  deleteCompleted,
  deleteTodo,
  toggle,
  toggleAll,
} from '../redux/actions/todoActions'
import { todoListSelector } from '../redux/selectors'
import TodoInput from './TodoInput'

function TodoList() {
  const todoList = useSelector(todoListSelector)

  const dispatch = useDispatch()

  const handleToggle = (id) => {
    dispatch(toggle(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleToggleAll = () => {
    dispatch(toggleAll())
  }

  const handleDeleteCompleted = () => {
    dispatch(deleteCompleted())
  }

  const TodoItem = ({ todoItem }) => {
    return (
      <Stack direction="row" alignItems="center" width="100%">
        <Stack direction="row" alignItems="center" flex={1}>
          <Checkbox
            checked={todoItem.completed}
            onChange={() => {
              handleToggle(todoItem.id)
            }}
          />
          <Typography
            sx={todoItem.completed && { textDecoration: 'line-through' }}
          >
            {todoItem.todo}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography
            pr={2}
            sx={todoItem.completed && { textDecoration: 'line-through' }}
          >
            {todoItem.priority[0].toUpperCase() + todoItem.priority.slice(1)}
          </Typography>
          <Button
            variant="text"
            sx={{
              cursor: 'pointer',
              color: 'black',
            }}
            size="small"
            onClick={() => {
              handleDelete(todoItem.id)
            }}
          >
            <ClearIcon />
          </Button>
        </Stack>
      </Stack>
    )
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
