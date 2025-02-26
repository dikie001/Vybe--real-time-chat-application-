import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="sm:w-full max-w-lg md:m-auto h-25 relative border-2 m-1 rounded-md shadow-md shadow-purple-500 border-cyan-600 z-10 flex justify-center items-center md:w-200 md:mt-20 md:mb-2 md:rounded-lg md:shadow-md md:shadow-purple-500">
        
        {/* Hamburger Menu */}
        <div className="absolute right-4 md:right-14 text-cyan-400 z-20">
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            duration={0.4}
            size={32}
          />
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-[80px]  bg-gradient-to-br from-cyan-900 via-blue-800 via-gray-700 to-gray-900
 border-2 border-cyan-500 shadow-md shadow-purple-800 text-white md:left-1/2 left-1/4 transform -translate-x-1/2 mt-5 rounded-lg px-3 py-4 list-none flex flex-col items-center font-semibold text-xl w-60 md:w-100 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <li className="hover:text-cyan-400 cursor-pointer border-2 border-transparent hover:border-purple-700 w-full flex justify-center rounded-lg">
            Home
          </li>
          <li className="hover:text-purple-400 cursor-pointer border-2 border-transparent hover:border-cyan-600 w-full flex justify-center rounded-lg">
            About
          </li>
          <li className="hover:text-cyan-400 cursor-pointer border-2 border-transparent hover:border-purple-700 w-full flex justify-center rounded-lg">
            Services
          </li>
          <li className="hover:text-purple-400 cursor-pointer border-2 border-transparent hover:border-cyan-700 w-full flex justify-center rounded-lg">
            Contact
          </li>
        </div>

        {/* Logo */}
        <img
          src="logo.png"
          alt="logo"
          className="w-30 h-auto cursor-pointer absolute top-1 left-1 max-w-[100px] object-contain"
        />

        {/* Branding Text */}
        <div>
          <h1 className="absolute left-24 font-extrabold text-5xl cursor-pointer bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent font-[times] top-8">
            Vybe
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
