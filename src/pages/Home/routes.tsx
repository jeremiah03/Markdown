import { RouteObject } from 'react-router-dom';
import Home from './components/Home';

const HomeRoutes: RouteObject = {
  path: '/markdown-editor',
  element: <Home />,
};

export default HomeRoutes;
