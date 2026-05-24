import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ola from '../src/pages/ola'
import Contador from '../src/pages/contador'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ola />,
  },
  {
    path: "/contador",
    element: <Contador />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;