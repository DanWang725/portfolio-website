import ContentHeader from '@components/Sections/ContentHeader';
import ContentSection from '@components/Sections/ContentSection';
import ContentText from '@components/Sections/ContentText';
import SilenceInterruptedBy from '@features/SilenceInterruption/SilenceInterruptedBy';

const RandomSounds: React.FC = () => {
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
      <ContentHeader>Silence Randomly Interrupted by....</ContentHeader>
      <ContentText>
        Videos that do 'silence randomly interrupted by [x sound effect] are
        hilarious to me, and they add to a comedic atmosphere. Sound effects
        somehow manage to play at the right situations. This module re-creates
        this effect within my website. If you play any sounds here, they'll play{' '}
        <b>anywhere</b> within my website!
      </ContentText>
      <SilenceInterruptedBy />
    </ContentSection>
  );
};

export default RandomSounds;
