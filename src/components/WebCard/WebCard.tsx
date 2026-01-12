import ContentSection from '@components/Sections/ContentSection';
import { Box } from '@mui/material';

interface WebCardProps {
  onClick: () => void;
}

const WebCard: React.FunctionComponent<
  React.PropsWithChildren<WebCardProps>
> = ({ children, onClick }) => {
  return (
    <Box
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.stopPropagation();
          e.preventDefault();
          onClick();
        }
      }}
      sx={{
        cursor: 'pointer',
        transition: 'background-color 0.5s',
        ':hover': () => ({ backgroundColor: 'rgba(0, 119, 143, 0.69)' }),
      }}
    >
      <ContentSection styleOverrides={{ width: 'auto', padding: '10px' }}>
        {children}
      </ContentSection>
    </Box>
  );
};
export default WebCard;
