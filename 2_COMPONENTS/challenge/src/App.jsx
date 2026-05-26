import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contador from '../src/components/contador'
import JuntarNome from '../src/components/nome'
import  PromocaoLoja from '../src/components/promocao'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contador />
  },
  {
    path: "/name",
    element: <JuntarNome />
  },
  {
    path: "/promocao",
    element: <PromocaoLoja />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;