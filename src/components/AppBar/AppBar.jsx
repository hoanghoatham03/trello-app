import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect/ModeSelect'

function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      backgroundColor: 'primary.dark',
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar