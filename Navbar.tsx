import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ThemeToggle from './ThemeToggle';

import './Navbar.css'; 
import '../App.css';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" className="navbar" elevation={4}>
      <Toolbar className="navbar-toolbar">
        <Typography variant="h6" className="navbar-title">
          📝 TodoApp
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {!isMobile ? (
          <Box className="navbar-links">
            <Button color="inherit" startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button color="inherit" startIcon={<InfoIcon />}>
              About
            </Button>
            <Button color="inherit" startIcon={<ContactMailIcon />}>
              Contact
            </Button>
          </Box>
        ) : (
          <IconButton color="inherit" edge="start" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
        )}

        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
