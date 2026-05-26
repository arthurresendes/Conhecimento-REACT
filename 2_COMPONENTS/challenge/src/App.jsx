import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contador from '../src/components/contador'
import JuntarNome from '../src/components/nome'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contador />
  },
  {
    path: "/name",
    element: <JuntarNome />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;