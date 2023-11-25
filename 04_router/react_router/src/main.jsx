import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import About from './components/About/About'
import User from './components/User/User'


const rooter=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>

  <Route path='' element={<Home/>}/>
  <Route path="About" element={<About/>}/>
  <Route path="Contact" element={<Contact/>}/>
  <Route path="user" element={<User/>}>
    <Route path=':userid' element={<User/>}/>
    </Route>

  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={rooter}></RouterProvider>
  </React.StrictMode>
)
