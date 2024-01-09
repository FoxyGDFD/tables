import { router } from '@app';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};
