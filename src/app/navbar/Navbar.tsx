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

  return (
    <AppBar
      sx={{
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        borderWidth: '2px',
        borderBottom: 'solid rgba(0, 255, 255, 0.7 )',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Daniel Wang
        </Typography>
        <List
          sx={{
            display: { sm: 'none', md: 'inline-flex' },
            flexDirection: 'row',
          }}
        >
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
          <Tooltip title="This will disable the background animation">
            <Typography>
              {isLowPerformance ? 'Enable Background' : 'Disable Background'}
            </Typography>
          </Tooltip>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
