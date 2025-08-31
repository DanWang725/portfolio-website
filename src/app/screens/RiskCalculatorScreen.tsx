import ContentHeader from '@components/Sections/ContentHeader';
import ContentSection from '@components/Sections/ContentSection';
import RiskBattle from '@features/Risk/components/RiskBattle';

const RiskCalculatorScreen = () => {
  return (
    <ContentSection styleOverrides={{ p: '1rem' }}>
      <ContentHeader>Risk Battle Calculator</ContentHeader>
      <RiskBattle />
    </ContentSection>
  );
};
export default RiskCalculatorScreen;
