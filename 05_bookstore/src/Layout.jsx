import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Cards from "./Components/Cards"
import Footer from './Components/Footer'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Cards/>
    <Footer/>
    </>
    )
}

export default Layout