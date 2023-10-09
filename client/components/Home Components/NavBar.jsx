import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const paths = ['/', '/pastTrips'];
const pages = ['Home', 'Past Trips'];

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClicked = (index) => {
    const path = paths[index];
    handleCloseNavMenu();
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#26a69a', color: '#212121' }}
      >
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', ml: 3 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page}
                  onClick={() => handleMenuItemClicked(index)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              mr: 10
            }}
          >
            <LocalAirportIcon sx={{ mr: 2 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TRIP PLANNER
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
