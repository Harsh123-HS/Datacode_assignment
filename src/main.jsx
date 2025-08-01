import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Login from './Component/Login.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import Signin from './Component/Signin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "Login", element: <Login /> },
      { path: "signin", element: <Signin/> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
