import ContentHeader from '@components/Sections/ContentHeader';
import ContentSection from '@components/Sections/ContentSection';
import ContentText from '@components/Sections/ContentText';
import MonoalphabeticalSubstitution from '@features/Decyphering/MonoalphabeticalSubstitution';

const Cypher: React.FC = () => {
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
      <ContentHeader>Monoalphabetic Substitution</ContentHeader>
      <ContentText>Decryption tool</ContentText>
      <MonoalphabeticalSubstitution />
    </ContentSection>
  );
};

export default Cypher;
