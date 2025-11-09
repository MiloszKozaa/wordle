import { Home } from '@/pages';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '*', element: <Navigate to='/' /> },
]);
