import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Users from './pages/Users';
import User from './pages/User';
import Gallery from './pages/Gallery';

const router = createBrowserRouter([
  {path: '/', element: <Users />},
  {path: '/user', element: <User />},
  {path: '/gallery', element: <Gallery />}
])


function App() {
  return <RouterProvider router={router} />

}

export default App;
