import { useLocation, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { PerformanceContext } from '../contexts/PerformanceProvider';
import {
  AppBar,
  Box,
  Button,
  List,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { routes } from '../routes';
import NavButtonItem from './NavButtonItem';

export const Navbar = () => {
  const location = useLocation();
  const { isLowPerformance, setIsLowPerformance } =
    useContext(PerformanceContext);
  const navigate = useNavigate();
  console.log(location);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Daniel Wang
        </Typography>
        <List sx={{ display: { sm: 'none', md: 'inline' } }}>
          {routes.map((route) => (
            <NavButtonItem
              route={route}
              navigate={navigate}
              key={route.name}
              pathname={location.pathname}
            />
          ))}
        </List>
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
