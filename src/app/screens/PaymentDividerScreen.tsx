import ContentHeader from '@components/Sections/ContentHeader';
import ContentSection from '@components/Sections/ContentSection';
import ContentText from '@components/Sections/ContentText';
import PaymentDivider from '@features/PaymentDivider/PaymentDivider';

const PaymentDividerScreen: React.FC = () => {
  return (
    <ContentSection styleOverrides={{ p: '1rem' }}>
      <ContentHeader>Payment Divider</ContentHeader>
      <ContentText>
        Calculator to split payments among several payees. This was created as a
        tool to divide up payments during a trip.
      </ContentText>
      <PaymentDivider />
    </ContentSection>
  );
};

export default PaymentDividerScreen;
