import { createBrowserRouter } from 'react-router-dom';
import { HomePage, GamePage, MyDeckPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/my-deck',
    element: <MyDeckPage />,
  },
]);

