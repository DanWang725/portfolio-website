import { Link, ListItem, Typography } from '@mui/material';
import { RouteElement } from '../../types/routes';
import { NavigateFunction } from 'react-router-dom';

interface NavButtonItemProps {
  route: RouteElement;
  navigate: NavigateFunction;
  pathname: string;
}

const NavButtonItem: React.FC<NavButtonItemProps> = ({
  route,
  navigate,
  pathname,
}) => {
  console.log(route);
  const isIndex = route?.index;
  const path = isIndex ? '/' : route.path;
  const isActive = isIndex ? path === pathname : pathname.startsWith(path);

  return (
    <ListItem
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        width: 'auto',
        marginX: '1rem',
        padding: '0',
      }}
    >
      <Link
        key={isIndex ? 'home' : route.name}
        href={`/#${path}`}
        underline="none"
        sx={{ borderBottom: isActive ? '2px solid #00FFFF' : 'none' }}
      >
        <Typography>{route.name}</Typography>
      </Link>
    </ListItem>
  );
};
export default NavButtonItem;
