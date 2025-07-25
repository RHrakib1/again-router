import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import User from './Component/User/User.jsx';
import Banner from './Component/Banner/Banner.jsx';
import SeeUser from './Component/User/SeeUser.jsx';
import Posts from './Component/Posts/Posts.jsx';
import SeePostDetails from './Component/Posts/SeePostDetails.jsx';
import Simple_From from './Component/From/Simple_From.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        index: true,
        element: <Banner></Banner>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: "/user",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: "/userdetails/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <SeeUser></SeeUser>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/postdetails/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <SeePostDetails></SeePostDetails>
      },
      {
        path:'/form',
        element:<Simple_From></Simple_From>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
