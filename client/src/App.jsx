
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import UpdateProfile from './pages/updateProfile';
import Users from './pages/users';
import Layout from './layout/Layout';
import ErrorPage from './pages/errorPage';
import UsersInfo from './pages/UsersInfo';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/updateRrofile/:id',
        element: <UpdateProfile/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/profile',
        element: <UsersInfo/>
      }
    ]
  }
])

function App() {



  return (
    <div className="app">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
