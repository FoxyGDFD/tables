import { Main, Partition, Root } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/*',
        element: <Partition />,
      },
    ],
  },
]);
