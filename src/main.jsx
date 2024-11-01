import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roat from './Cpmponents/Roat/Roat';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Cpmponents/Roat/Home/Home';
import Dashbord from './Dashbord/Dashbord';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roat></Roat>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dasbord',
        element: <Dashbord></Dashbord>,
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
