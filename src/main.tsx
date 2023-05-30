import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './components/NotFound/index.tsx';
import { Home } from './components/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/to-do",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Home /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
