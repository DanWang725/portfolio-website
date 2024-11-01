import { NavLink } from 'react-router-dom';
import { getHash, scrollToHash } from '../../shared-utils/src';
import { ArticleSection } from './types/article';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Home } from '@mui/icons-material';
interface ArticleSidebarProps {
  entries: ArticleSection[];
  handleBack?: () => void;
}

const ExpandTest = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box
      position="relative"
      width={isExpanded ? '10rem' : '1rem'}
      sx={{ backgroundColor: 'green' }}
    >
      <IconButton onClick={() => setIsExpanded((value) => !value)}>
        <Home />
      </IconButton>
      <Typography>grr</Typography>
      <Typography>grr</Typography>
      <Typography>grr</Typography>
    </Box>
  );
};

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  entries,
  handleBack,
}) => {
  return (
    <Box width={'4rem'}>
      <Box position="sticky" top="20vh" width="3rem">
        <ExpandTest />
        Sticky
      </Box>
      <Box>Stays</Box>
    </Box>
  );
  return (
    <Box position={'sticky'} top="20vh">
      <div className="article-sidebar">
        Navigation
        <ul className="article-sidebar-list">
          {entries?.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                to={`#${id}`}
                // isActive={() => {
                //   return getHash() === `#${id}`;
                // }}
                style={() =>
                  getHash() === `#${id}` ? { fontWeight: '600' } : {}
                }
                onClick={() => scrollToHash(id)}
              >
                {`${title}`}
              </NavLink>
            </li>
          ))}
        </ul>
        {handleBack && (
          <button
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </button>
        )}
      </div>
    </Box>
  );
};
export default ArticleSidebar;
