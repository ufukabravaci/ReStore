import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode : boolean;
  setDarkMode : (value: boolean) => void;
}

export default function Header({darkMode, setDarkMode} : Props) {
  
  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Switch checked = {darkMode} onChange={handleThemeChange}/>
        <Typography variant="h6">RE-STORE</Typography>
      </Toolbar>
    </AppBar>
  );
}
