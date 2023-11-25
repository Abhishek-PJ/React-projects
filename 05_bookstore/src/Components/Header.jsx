import React from "react";

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
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900"
                aria-expanded="false"
              >
                Product
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

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
            <a href="#" className="text-sm font-bold leading-6 text-gray-900">
              Login <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
