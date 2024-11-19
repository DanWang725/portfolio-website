import { useLocation, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { PerformanceContext } from '../contexts/PerformanceProvider';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tooltip,
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
        <Button onClick={() => setIsLowPerformance((val) => !val)}>
          <Typography>
            {isLowPerformance ? 'Enable Background' : 'Disable Background'}
          </Typography>
          <Tooltip title="This will disable the background animation" />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
