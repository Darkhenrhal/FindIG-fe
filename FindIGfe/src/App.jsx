import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Page from './components/Page';

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className='absolute w-[100%] bg-black text-gray-100 text-[15px] z-10'>
        <Navbar/>
      </div>
      <div className=''>
        <Page/>
      </div>
    </div>
  );
}

export default App;

