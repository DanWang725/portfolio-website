import {
  LinkProps,
  NavLink,
  NavLinkProps,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getHash, scrollToHash } from '../../shared-utils/src';
import { ArticleSection } from './types/article';
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  MenuList,
  Typography,
} from '@mui/material';
import React, { forwardRef, HtmlHTMLAttributes, useState } from 'react';
import { Menu, ArrowBack } from '@mui/icons-material';
import ContentSection from '../Sections/ContentSection';

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

const ExpandTest: React.FC<ExpandTestProps> = ({
  entries,
  handleBack,
  isExpanded,
  setIsExpanded,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location', location);
  return (
    <Box
      position="sticky"
      sx={{
        // backgroundColor: 'green',
        width: 'auto',
        top: '80px',
        overflow: 'hidden',
        textWrap: 'nowrap',
        listStyleType: 'none',
        transition: 'width 0.5s',
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon onClick={() => handleBack()} key={'back'}>
            <ArrowBack />
          </ListItemIcon>
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
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
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
      >
        <ExpandTest
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
