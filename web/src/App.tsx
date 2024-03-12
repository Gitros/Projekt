import { createBrowserRouter } from 'react-router-dom';

import './App.css';
import Users from './pages/Users';

createBrowserRouter([
  {path: '/', element: <Users />},
  {}
])


function App() {
  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
