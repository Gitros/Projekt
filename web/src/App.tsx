import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Users from './pages/Users';
import User from './pages/User';
import Gallery from './pages/Gallery';
import Main from './pages/Main';

const router = createBrowserRouter([
  {path: '/', element: <Main />},
  {path: '/users', element: <Users />},
  {path: '/user', element: <User />},
  {path: '/gallery', element: <Gallery />}
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
