import { Button, Typography } from '@mui/material';
import { RouteElement } from '@types/RouteSegment';
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
  const isIndex = route?.index;
  const path = isIndex ? '/' : route.path;
  const isActive = isIndex ? path === pathname : pathname.startsWith(path);

  return (
    <Button
      key={route.path}
      onClick={() => navigate(path)}
      variant={isActive ? 'contained' : 'text'}
    >
      <Typography>{route.name}</Typography>
    </Button>
  );
};
export default NavButtonItem;
