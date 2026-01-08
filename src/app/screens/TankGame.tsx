import ContentHeader from '@components/Sections/ContentHeader';
import ContentSection from '@components/Sections/ContentSection';
import ContentText from '@components/Sections/ContentText';
import TankGameSketch from '@features/TankGame/TankGameSketch';

const TankGame: React.FC = () => {
  // const start = () => {
  //   const randomInterval = Math.floor(Math.random() * playInterval);

  //   setTimeoutId(timeoutManager.setTimeout(playSound, randomInterval));
  //   setNextTrigger(new Date(Date.now() + randomInterval));
  // };

  // const stop = () => {
  //   timeoutManager.clearTimeout(timeoutId ?? 0);
  //   setTimeoutId(undefined);
  //   setNextTrigger(undefined);
  // };

  // useEffect(() => {
  //   const inte = setInterval(() => setTime(new Date()), 1);
  //   return () => clearInterval(inte);
  // }, []);

  // const playSound = () => {
  //   const audio = new Audio(selectedUrl);
  //   audio.play();
  //   start();
  // };

  return (
    <ContentSection styleOverrides={{ p: '1rem' }}>
      <ContentHeader>Tank Game</ContentHeader>
      <ContentText>
        This was made for my grade 11 computer science summative. Originally
        written on p5.js, this has been ported over.
      </ContentText>
      <TankGameSketch />
    </ContentSection>
  );
};

export default TankGame;
