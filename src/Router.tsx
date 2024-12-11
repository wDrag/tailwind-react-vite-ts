import { Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <>{import.meta.env.ENV_API_URL || 'undefined'}</>,
      },
    ],
  },
]);
