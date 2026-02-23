import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import About from './About';
import NotFound from './NotFound';
import { getCourseById } from './data';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { 
        path: 'courses', 
        element: <Courses /> 
      },
      { 
        path: 'courses/:id', 
        element: <CourseDetail />,
        errorElement: <div className="error-page">Course not found</div>,
        loader: async ({ params }) => {
          const course = getCourseById(Number(params.id));
          if (!course) throw new Error('Course not found');
          return { course };
        }
      },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);