import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>
      <header className=" bg-blue-400">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
                
              <img
                className="h-8 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/3532/3532091.png"
                alt=""
              />
            </a>
            <h1 className=" m-2 font-bold">BOOKLAND</h1>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
        
       
            <NavLink to={"/category"} className="text-sm font-bold leading-6 text-gray-900">
              Categories
            </NavLink>
            <a href="#" className="text-sm font-bold leading-6 text-gray-900">
              Features
            </a>
            <a href="#" className="text-sm font-bold leading-6 text-gray-900">
              Marketplace
            </a>
            <a href="#" className="text-sm font-bold leading-6 text-gray-900">
              Company
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink to={"/login"} className="text-sm font-bold leading-6 text-gray-900">
              Login <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
