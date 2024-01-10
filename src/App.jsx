import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >

        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><LightModeIcon fontSize='small' /> Light</div>

        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>

        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )

}


function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>

      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>

      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center'
      }}>Board Bar</Box>
      <Box sx={{
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center'
      }}>
        Bar Content
      </Box>

    </Container>
  )
}

export default App
