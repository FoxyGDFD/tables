import { Main, Root } from '@pages';
import { Partition } from '@widgets/index';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '*',
        element: <Partition />,
      },
    ],
  },
]);
