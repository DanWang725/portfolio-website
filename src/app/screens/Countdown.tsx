import ContentSection from '@components/Sections/ContentSection';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import explosion from '@assets/expl.gif';
import yippee from '@assets/yippee-tbh.mp3';
import useCyclicShifting from '@hooks/TextEffects/useCyclicShifting';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const audio = new Audio(yippee);
  const { text, setIsActive } = useCyclicShifting('Happy New Year! ', 150);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);

  const enableCelebration = () => {
    if (hasTriggered) {
      return;
    }
    setIsActive(true);
    playAudio();
    setIsCelebrating(true);
    setHasTriggered(true);
    setTimeout(() => {
      setIsCelebrating(false);
    }, 2000);
  };

  const playAudio = () => {
    audio.play();
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isCelebrating) {
      return;
    }

    if (new Date('2025-01-01 EST').getTime() - time.getTime() < 0) {
      enableCelebration();
    }
  }, [time]);

  return (
    <Box>
      {isCelebrating && (
        <img
          src={explosion}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            right: 0,
            bottom: 0,
          }}
        ></img>
      )}
      <ContentSection styleOverrides={{ p: '1rem' }}>
        <Typography variant="h2">Countdown to New Years</Typography>
        <Typography variant="h3">{time.toLocaleTimeString()}</Typography>
        <p>{time.getMilliseconds()}</p>
        {hasTriggered && <Typography variant="h3">{text}</Typography>}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d558.7543954640604!2d-80.24567615610592!3d43.43304766849586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b874dde1a8027%3A0x5281d2907cc67c59!2sCIBC%20ATM!5e1!3m2!1sen!2sca!4v1735624938975!5m2!1sen!2sca"
          width="1100"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </ContentSection>
    </Box>
  );
};
export default Countdown;
