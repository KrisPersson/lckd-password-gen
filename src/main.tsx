import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { MainView } from './views/MainView/MainView';
import LoginView from './views/LoginView/LoginView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />
  },
  {
    path: '/login',
    element: <LoginView />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
