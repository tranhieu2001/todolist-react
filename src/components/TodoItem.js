import ClearIcon from '@mui/icons-material/Clear'
import { Box, Button, Checkbox, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import { deleteTodo, toggle } from '../redux/actions/todoActions'
import buttonStyle from './buttonStyle'

const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch()

  const handleToggle = (id) => {
    dispatch(toggle(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

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
        <Box
          component="button"
          sx={
            buttonStyle.find((button) => button.value === todoItem.priority)
              .style
          }
        >
          <Typography
            sx={todoItem.completed && { textDecoration: 'line-through' }}
          >
            {todoItem.priority[0].toUpperCase() + todoItem.priority.slice(1)}
          </Typography>
        </Box>
        <Button
          variant="text"
          size="small"
          sx={{
            cursor: 'pointer',
            color: 'black',
            ml: 0.5,
          }}
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

export default TodoItem
