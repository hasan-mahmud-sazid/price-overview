import React, { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo Section */}
        <div className="text-2xl font-black tracking-tighter text-blue-700 cursor-pointer">
          FIT<span className="text-gray-800">ZONE</span>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden text-3xl cursor-pointer text-gray-800 transition-transform duration-300 active:scale-90"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <AiOutlineClose className="text-red-500" />
          ) : (
            <AiOutlineMenu />
          )}
        </div>

        {/* Link  */}
        <ul
          className={`
          md:flex md:items-center md:gap-8
          absolute md:static bg-white md:bg-transparent w-full md:w-auto
          left-0 md:pl-0 pl-9 transition-all duration-500 ease-in-out
          ${
            open
              ? "top-18 opacity-100 shadow-xl pb-6 border-b-2 border-blue-500"
              : "-top-100 opacity-0 md:opacity-100"
          }
        `}
        >
          {routes.map((route) => (
            <li key={route.id} className="my-6 md:my-0">
              <Link route={route} />
            </li>
          ))}

          {/* Mobile Action Button */}
          <button className="md:hidden bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
            Join Now
          </button>
        </ul>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
