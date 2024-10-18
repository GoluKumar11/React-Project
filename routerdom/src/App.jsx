import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';


function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<><Navbar /> <Home /></> 
    },
    {
      path:'/About',
      element:<> <Navbar /><About /></>
    },
    {
      path:"/contact",
      element:<><Navbar /><Contact /></> 
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
