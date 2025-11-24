import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { PerformanceContext } from '../contexts/PerformanceProvider';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { routes } from '../routes';
import NavButtonItem from './NavButtonItem';
import { RandomSoundsContext } from '@app/contexts/SoundsProvider';
import { TimeoutContext } from '@app/contexts/TimeoutProvider';
import { Tune } from '@mui/icons-material';

const ActiveSoundComponent = lazy(
  () => import('@features/SilenceInterruption/components/ActiveSound'),
);

export const Navbar = () => {
  const location = useLocation();
  const timeoutProvider = useContext(TimeoutContext);
  const [soundDrawerOpen, setSoundDrawerOpen] = useState(false);
  const [soundsUsed, setSoundsUsed] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const { isLowPerformance, setIsLowPerformance } =
    useContext(PerformanceContext);

  const { loadedSounds, pauseSound, resumeSound, removeSound } =
    useContext(RandomSoundsContext);

  const handleRemoveSound = (soundId: number) => {
    //TODO check sound would clear this thing
    removeSound(soundId);
  };

  const handleToggleSound = (soundId: number, pause: boolean) => {
    pause ? pauseSound(soundId) : resumeSound(soundId);
  };

  const removeAllSounds = () => {
    loadedSounds.forEach((sound) => {
      removeSound(sound.id);
    });
  };
  const togglePlaybackSounds = () => {
    const hasPlaying = loadedSounds.some((s) => !s.pauseInformation.isPaused);
    if (hasPlaying) {
      pauseSound(
        loadedSounds
          .filter((s) => !s.pauseInformation.isPaused)
          .map((s) => s.id),
      );
    } else {
      resumeSound(loadedSounds.map((s) => s.id));
    }
  };
  const navigate = useNavigate();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setSoundDrawerOpen(open);
    };

  useEffect(() => {
    if (!soundsUsed && loadedSounds.length > 0) {
      setSoundsUsed(true);
    }
  }, [loadedSounds]);
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
        {soundsUsed && (
          <Suspense>
            <Tooltip title="Random Sounds Controls">
              <IconButton onClick={toggleDrawer(true)}>
                <Tune />
              </IconButton>
            </Tooltip>

            <Drawer
              open={soundDrawerOpen}
              anchor="right"
              onClose={toggleDrawer(false)}
            >
              <Box
                width="20rem"
                display="inline-flex"
                flexDirection="column"
                justifyContent="flex-start"
                height="100%"
                p="1rem"
              >
                <Typography variant="h4" mb="1rem">
                  Random Sounds
                </Typography>
                <Box display="flex" mb="1rem" justifyContent="space-between">
                  <Button
                    onClick={() => togglePlaybackSounds()}
                    variant="outlined"
                    disabled={loadedSounds.length === 0}
                  >
                    <Tooltip
                      title={
                        loadedSounds.some((s) => !s.pauseInformation.isPaused)
                          ? 'Pause the playing of random sounds'
                          : 'resume ALL THE SOUNDS'
                      }
                    >
                      <Typography>
                        {loadedSounds.some((s) => !s.pauseInformation.isPaused)
                          ? 'Pause All'
                          : 'Resume All'}
                      </Typography>
                    </Tooltip>
                  </Button>
                  <Button
                    sx={{ alignSelf: 'flex-end' }}
                    onClick={removeAllSounds}
                    variant="contained"
                    color="error"
                    disabled={loadedSounds.length === 0}
                  >
                    Clear
                  </Button>
                </Box>
                <Divider />
                <Box my="1rem">
                  {loadedSounds.length === 0 && (
                    <Typography fontStyle={'italic'}>
                      There's no sounds playing right now. Add some{' '}
                      <NavLink
                        to={'projects/funny'}
                        onClick={() => setSoundDrawerOpen(false)}
                      >
                        <Link>here</Link>
                      </NavLink>
                    </Typography>
                  )}
                  {loadedSounds.map((sound, index) => (
                    <ActiveSoundComponent
                      key={`active-sound-nav-${index}`}
                      sound={sound}
                      curTime={time}
                      triggerTime={timeoutProvider.getTriggerTime(
                        sound?.id || null,
                      )}
                      handleRemoveSound={() => handleRemoveSound(sound.id)}
                      handleToggleSoundPlayback={(pause) =>
                        handleToggleSound(sound.id, pause)
                      }
                      minimal
                    />
                  ))}
                </Box>
              </Box>
            </Drawer>
          </Suspense>
        )}
      </Toolbar>
    </AppBar>
  );
};
