import { useLocation, useNavigate } from 'react-router-dom';
import { getHash, scrollToHash } from '../../shared-utils/RouteHashUtils';
import { ArticleSection } from './types/article';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';

interface ArticleSidebarProps {
  entries: ArticleSection[];
  handleBack: () => void;
}

interface ExpandTestProps {
  entries: ArticleSection[];
  handleBack: () => void;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
const SIDEBAR_WIDTH = '5rem';

const ExpandingSidebar: React.FC<ExpandTestProps> = ({
  entries,
  handleBack,
  isExpanded,
  setIsExpanded,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box
      position="sticky"
      sx={{
        width: 'auto',
        top: '80px',
        overflow: 'hidden',
        textWrap: 'nowrap',
        listStyleType: 'none',
        transition: 'width 0.5s',
      }}
    >
      <List>
        <ListItemButton onClick={() => handleBack()}>
          <ListItemIcon key={'back'}>
            <ArrowBack />
          </ListItemIcon>
          {isExpanded && <Typography variant="body1">Back</Typography>}
        </ListItemButton>
        <Divider />
        <ListItem>
          <Typography variant="caption">Contents</Typography>
        </ListItem>
        {entries?.map(({ id, title, titleShort }) => (
          <ListItemButton
            key={id}
            selected={getHash() === `#${id}`}
            onClick={() => {
              scrollToHash(id);
              navigate(`${location.pathname}#${id}`);
              setIsExpanded(false);
            }}
          >
            <Typography
              width={isExpanded ? '10rem' : SIDEBAR_WIDTH}
              overflow="auto"
              onScroll={() => {}}
              textOverflow="ellipsis"
              variant="body2"
              sx={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}
            >
              {isExpanded ? title : (titleShort ?? title)}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  entries,
  handleBack,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box width={SIDEBAR_WIDTH} height="inherit">
      <Box
        width={isExpanded ? '10rem' : SIDEBAR_WIDTH}
        height="100%"
        sx={{
          backgroundColor: 'rgba(30, 30, 30, 0.8)',
          borderColor: 'cyan',
          borderRight: '2px solid',
          transition: 'width 0.5s',
          position: 'relative',
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <ExpandingSidebar
          entries={entries}
          handleBack={handleBack}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </Box>
    </Box>
  );
};
export default ArticleSidebar;
