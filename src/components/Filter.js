import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { setPriorityFilter, switchFilter } from '../redux/actions/filterActions'
import { currentFilterSelector, filterListSelector } from '../redux/selectors'
import buttonStyle from './buttonStyle'

function Filter() {
  const dispatch = useDispatch()
  const filterList = useSelector(filterListSelector)
  const status = useSelector(currentFilterSelector)

  const options = buttonStyle.map((option) => {
    return option.value[0].toUpperCase() + option.value.slice(1)
  })

  const handleChangeFilter = (e) => {
    const currentFilter = e.target.value
    dispatch(switchFilter(currentFilter))
  }

  const handleChangePriority = (newValue) => {
    dispatch(setPriorityFilter(newValue))
  }

  return (
    <Stack my={2}>
      <Stack>
        <Typography fontSize={16} fontWeight={700}>
          Filter By Status
        </Typography>
        <FormControl>
          <RadioGroup
            defaultValue={'all'}
            value={status}
            onChange={handleChangeFilter}
            row
          >
            {filterList.map((filter) => (
              <FormControlLabel
                key={filter.value}
                value={filter.value}
                control={<Radio />}
                label={filter.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack>
        <Typography fontSize={16} fontWeight={700}>
          Filter By Priority
        </Typography>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          size="small"
          onChange={handleChangePriority}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </Stack>
  )
}

export default Filter
