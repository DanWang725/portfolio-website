interface RouteSegmentProps {
  screen: string;
  path?: string;
  index?: boolean;
  name?: string;
  children?: RoutePathSegmentProps[];
}
interface RouteIndexSegmentProps extends RouteSegmentProps {
  index: boolean;
  children?: never;
}

interface RoutePathSegmentProps extends RouteSegmentProps {
  path: string;
  index?: never | false;
}

export type RouteElement = RoutePathSegmentProps | RouteIndexSegmentProps;
