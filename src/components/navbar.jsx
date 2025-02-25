import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="sm:w-full h-25 relative border-2 m-2 rounded-md shadow-md shadow-purple-500 border-cyan-600 z-10 flex items-center md:w-200 md:flex md:justify-center md:items-center md:border-2 md:mt-20 md:mb-2 md:rounded-lg md:shadow-md md:shadow-purple-500">
        <div className="mt-1 md:right-14 absolute right-4 text-cyan-400 z-11">
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            duration={0.4}
            size={32}
          />
        </div>
        <div className= {`absolute top-[103px] border-2 border-cyan-500 shadow-md shadow-purple-800 text-white left-2 mt-5 rounded-lg px-3 py-4 list-none flex flex-col items-center font-semibold   text-xl w-60 md:w-100 transition-all duration-300 ${isOpen? "opacity-100 visible": "opacity-0 invisible"}`}>
   
        <li className="hover:text-cyan-400 cursor-pointer border-2 border-transparent hover:border-2 w-full flex justify-center rounded-lg hover:border-purple-700 "  >Home</li>
          <li className="hover:text-purple-400 cursor-pointer border-2 border-transparent hover:border-2 w-full flex justify-center rounded-lg hover:border-cyan-600 ">About</li>
          <li className="hover:text-cyan-400 cursor-pointer border-2 border-transparent hover:border-2 w-full flex justify-center rounded-lg hover:border-purple-700">Services</li>
          <li className="hover:text-purple-400 cursor-pointer border-2 border-transparent hover:border-2 w-full flex justify-center rounded-lg hover:border-cyan-700">Contact</li>
         
        </div>

        <img
          src="logo.png"
          alt="logo"
          className="w-30  h-auto cursor-pointer absolute top-1 left-1 max-w-[100px] object-contain"
        />

        <div>
          <h1 className="left-24 absolute font-extrabold text-5xl cursor-pointer bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent font-[times] top-8">
            Vybe
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
