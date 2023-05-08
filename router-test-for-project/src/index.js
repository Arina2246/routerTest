import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Error from './error';
import SecondComponent from './22';
import FirstComponent from './11';

const router = createBrowserRouter([
  {
    path: "routerTest/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "routerTest/1",
    element: <FirstComponent />,
  },
  {
    path: "routerTest/2",
    element: <SecondComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Routing is working</p>
    <RouterProvider router={router} />
  </React.StrictMode>
);
