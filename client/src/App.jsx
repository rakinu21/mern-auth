import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import UpdateProfile from './pages/updateProfile';
import Users from './pages/users';
import Layout from './layout/Layout';
import ErrorPage from './pages/errorPage';
import UsersInfo from './pages/UsersInfo';
import { PrivateRoutes } from './components/PrivateRouteController';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        element: <PrivateRoutes />, // Wrap protected routes with PrivateRoutes
        children: [
          {
            path: '/updateRrofile/:id',
            element: <UpdateProfile />,
          },
          {
            path: '/profile',
            element: <UsersInfo />,
          },
        ],
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
