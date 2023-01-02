import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { addTodo } from '../redux/actions/todoActions'
import buttonStyle from './buttonStyle'

function TodoInput() {
  const dispatch = useDispatch()
  const ref = useRef()

  const [priority, setPriority] = useState('medium')
  const [todo, setTodo] = useState('')
  const [accuracy, setAccuracy] = useState(false)

  const handleChangePriority = (e) => {
    setPriority(e.target.value)
  }

  const handleChangeTodo = (e) => {
    const todoInput = e.target.value

    if (!todoInput.startsWith(' ')) {
      setAccuracy(false)
      setTodo(todoInput)
    } else {
      setAccuracy(true)
    }
  }

  const handleAdd = (e) => {
    if (todo.trim().length !== 0) {
      dispatch(addTodo(todo, priority, uuid()))
      setPriority('medium')
      setTodo('')
      ref.current.focus()
    } else {
      setAccuracy(true)
    }
  }

  const handleDeleteInput = () => {
    setTodo('')
    ref.current.focus()
  }

  return (
    <Box sx={{ display: 'flex', height: '32px', marginTop: '20px' }}>
      <Box sx={{ height: '32px' }} flex={1}>
        <TextField
          inputRef={ref}
          placeholder="Add todo"
          size="small"
          variant="outlined"
          sx={{ width: '100%' }}
          value={todo}
          onChange={handleChangeTodo}
          error={accuracy}
          helperText={accuracy && 'Please add todo'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffRoundedIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={handleDeleteInput}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box>
        <Box width="120px">
          <FormControl fullWidth size="small">
            <Select value={priority} onChange={handleChangePriority}>
              {buttonStyle.map((button) => {
                return (
                  <MenuItem value={button.value} key={button.value}>
                    <Box component="button" sx={button.style}>
                      {button.value[0].toUpperCase() + button.value.slice(1)}
                    </Box>
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <Button
          sx={{ height: '40px', boxShadow: 'none' }}
          variant="contained"
          onClick={handleAdd}
        >
          ADD
        </Button>
      </Box>
    </Box>
  )
}

export default TodoInput
