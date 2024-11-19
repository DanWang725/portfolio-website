import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { StylingContext } from '../contexts/StylingProvider';
import { PerformanceContext } from '../contexts/PerformanceProvider';
import {
  AppBar,
  Box,
  Button,
  ListItemButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { routes } from '../routes';

export const Navbar = () => {
  const location = useLocation();
  const { isLowPerformance, setIsLowPerformance } =
    useContext(PerformanceContext);
  const navigate = useNavigate();
  console.log(location);

  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {routes.map((route) => {
            const path = route?.index ? '/' : route.path;
            const isActive = route?.index
              ? path === location.pathname
              : location.pathname.startsWith(path);

            return (
              <Button
                key={route.path}
                onClick={() => navigate(path)}
                variant={isActive ? 'contained' : 'text'}
              >
                <Typography>{route.name}</Typography>
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
