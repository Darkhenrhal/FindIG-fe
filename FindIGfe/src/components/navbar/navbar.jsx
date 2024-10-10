import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='py-4 px-4 sm:px-10 z-50 min-h-[70px] relative'>
      <div className='lg:flex lg:items-center gap-x-2 relative'>
        <div className="flex items-center shrink-0">
          <a href="javascript:void(0)">
            <h1 className="font-bold text-3xl">FindSocial</h1>
          </a>
          <button id="toggleOpen" className='lg:hidden ml-auto' onClick={toggleMenu}>
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div
          id="collapseMenu"
          className={`lg:ml-14  w-full lg:flex lg:justify-end gap-6 ${
            menuOpen ? "block" : "hidden"
          } max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul className='lg:flex gap-x-6 max-lg:space-y-3'>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)">
                 <h1 className="font-bold text-3xl">FindSocial</h1>
               </a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='hover:text-blue-600 text-blue-600 block transition-all'>Home</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='hover:text-blue-600 block transition-all'>Influencer</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='hover:text-blue-600 block transition-all'>Instagram</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='hover:text-blue-600 block transition-all'>Tiktok</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='hover:text-blue-600 block transition-all'>Youtube</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='hover:text-blue-600 block transition-all'>Web</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
