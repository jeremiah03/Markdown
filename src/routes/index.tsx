import { Navigate, useRoutes } from 'react-router-dom';
import HomeRoutes from '../pages/Home/routes';

export const Routes = () => {
  return useRoutes([
    {
      path: '*',
      element: <Navigate to='/markdown-editor' />,
    },
    HomeRoutes,
  ]);
};

export default Routes;
