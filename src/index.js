import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from '../src/page/HomePage';
import ErrorPage from '../src/page/ErrorPage';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

const myRouter  = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<Hero/>
    },
    {
      path:"/skills",
      element:<Skills/>
    },
    {
      path:"/projects",
      element:<Project/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);