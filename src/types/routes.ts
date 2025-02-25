interface BaseRouteSegmentProps {
  name?: string;
}

interface RouteSegmentProps extends BaseRouteSegmentProps {
  path: string;
  index?: never;
  screen?: string;
  children?: RouteSegmentProps[];
}

interface RouteIndexSegmentProps extends BaseRouteSegmentProps {
  index: true;
  screen: string;
  children?: never;
}

interface RouteSegmentWithOutput extends BaseRouteSegmentProps {
  path: string;
  index?: never;
  screen?: never;
  children: [RouteIndexSegmentProps, ...RouteSegmentProps[]];
}

export type RouteElement =
  | RouteIndexSegmentProps
  | RouteSegmentWithOutput
  | RouteSegmentProps;
