import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='py-4 px-4 sm:px-10 z-50 min-h-[70px] relative'>
      <div className='lg:flex lg:items-center gap-x-2 relative'>
        <div className="flex items-center shrink-0">
          <NavLink to="/">
            <h1 className="font-bold text-3xl">FindSocial</h1>
          </NavLink>
          <button id="toggleOpen" className={`lg:hidden ml-auto ${menuOpen ? "hidden" : "block"}`} onClick={toggleMenu} >
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div
          id="collapseMenu"
          className={`lg:ml-14 w-full lg:flex lg:justify-end gap-6 ${menuOpen ? "block" : "hidden"} max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          

          <ul className='lg:flex gap-x-6 max-lg:space-y-3'>
            <button id="toggleClose" className='lg:hidden fixed top-4 right-8 z-[100] rounded-full bg-white p-3 transition-transform' onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/" className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
              }>Home</NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/facebook" className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
              }>Facebook</NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/youtube" className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
              }>Youtube</NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/tiktok" className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
              }>Tiktok</NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/instagram" className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
              }>Instagram</NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/web" className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
              }>Web</NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/influencer" 
              className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
            }>
                Influencer
              </NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to="/linkembed"  
              className={({ isActive }) =>`block transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 scale-105' : 'hover:text-blue-600'}`
              }>Embed Links</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;






