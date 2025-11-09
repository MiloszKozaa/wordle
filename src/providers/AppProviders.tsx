import { router } from '@/routing/router';
import { RouterProvider } from 'react-router';
import StoreProvider from './StoreProvider';

const AppProviders = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};

export default AppProviders;
