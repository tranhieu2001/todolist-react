import { TextField, Typography, InputAdornment } from '@mui/material'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import { Stack } from '@mui/system'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchInput } from '../redux/actions/filterActions'

function Search() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const ref = useRef()

  const handleSetSearchInput = (e) => {
    const searchInput = e.target.value

    if (!searchInput.startsWith(' ')) {
      setSearch(searchInput)
      dispatch(setSearchInput(searchInput))
    } else {
      setSearch('')
    }
  }

  const handleDeleteInput = () => {
    setSearch('')
    ref.current.focus()
    dispatch(setSearchInput(''))
  }

  return (
    <Stack>
      <Typography fontSize={16} fontWeight={700}>
        Search
      </Typography>

      <TextField
        inputRef={ref}
        placeholder="Input search todo"
        variant="outlined"
        size="small"
        value={search}
        onChange={handleSetSearchInput}
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
    </Stack>
  )
}

export default Search
