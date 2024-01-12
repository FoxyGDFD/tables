import { Main, Partition, Root } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/tables',
        element: <Main />,
      },
      {
        path: '/tables/*',
        element: <Partition />,
      },
    ],
  },
]);
