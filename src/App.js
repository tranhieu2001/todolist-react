import { Box, Stack } from '@mui/material'
import { styled } from '@mui/system'
import Filter from './components/Filter'
import Heading from './components/Heading'
import Search from './components/Search'
import TodoList from './components/TodoList'

function App() {
  const MyBox = styled(Box)({
    marginTop: '10px',
    borderRadius: '10px',
    width: '600px',
    height: '90vh',
    margin: '5vh auto',
    boxShadow: 'rgb(191 191 191) 0px 0px 10px 4px',
  })

  return (
    <MyBox>
      <Stack direction="column" p={4}>
        <Heading />
        <Search />
        <Filter />
        <TodoList />
      </Stack>
    </MyBox>
  )
}

export default App
