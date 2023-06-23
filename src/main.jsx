import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './Pages/ErrorElement/ErrorElement';
import Index from './Pages/Index/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/education",
    element: <div>Education</div>,
  },
  {
    path: "/skills",
    element: <div>Skills</div>,
  },
  {
    path: "/projects",
    element: <div>Projects</div>,
  },
  {
    path: "/blogs",
    element: <div>Blogs</div>,
  },
  {
    path : "*",
    errorElement : <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
