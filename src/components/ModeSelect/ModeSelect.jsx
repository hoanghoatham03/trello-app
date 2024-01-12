import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
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
    <FormControl size="small" sx={{ minWidth: 55 }}>
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >

        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' />
            <Box sx={{ display: { xs: ' none', md: 'block' } }}>Light</Box>
          </Box>

        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small' />
            <Box sx={{ display: { xs: ' none', md: 'block' } }}>Dark</Box>
          </Box>

        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' />
            <Box sx={{ display: { xs: ' none', md: 'block' } }}>System</Box>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )

}


export default ModeSelect