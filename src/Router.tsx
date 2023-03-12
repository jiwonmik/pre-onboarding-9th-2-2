import { createBrowserRouter } from 'react-router-dom';

import Layout from './layout/Layout';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Reservation from './pages/Reservation';

const router = createBrowserRouter([
  {
    path: '/', // Container for all Routes
    element: <Layout />,
    children: [
      {
        path: 'main',
        element: <Main />,
        errorElement: <NotFound />,
      },
      {
        path: 'reservation',
        element: <Reservation />,
        errorElement: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
