import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
} from '@mui/material'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'

import { addTodo } from '../redux/actions/todoActions'

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
              <MenuItem value={'low'}>Low</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'high'}>High</MenuItem>
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
