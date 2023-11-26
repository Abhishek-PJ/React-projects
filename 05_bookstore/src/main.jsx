import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Login from "./Pages/Login.jsx"
import Categories from "./Pages/Categories.jsx"
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'


const router=createBrowserRouter(createRoutesFromElements(
     
    <>
    <Route path='' element={<Layout />} />
    <Route path='/' element={<Layout />} />
    <Route path='/login' element={<Login />} />
    <Route path='/category' element={<Categories />} />
    </>

))


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    
)
