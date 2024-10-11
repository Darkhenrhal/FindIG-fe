import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Facebook from './components/facebookpg/facebook';
import Instagram from './components/instagram/instagram';
import Tiktok from './components/tiktok/tiktok';
import Youtube from './components/youtube/youtube';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Influencer from './components/influencer/influencer';

function App() {
  return (
    <Router> {/* Ensure Router wraps the entire app */}
      <div className="max-w-[1920px] mx-auto ">
        <div className='absolute w-[100%] bg-black text-gray-100 text-[15px] z-10'>
          <Navbar />
        </div>
        <div className='pt-16 bg-black3'> {/* Added padding to avoid content overlapping the Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/influencer" element={<Influencer/>}/>
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/tiktok" element={<Tiktok/>} />
            <Route path="/youtube" element={<Youtube/>} />
            <Route path="/facebook" element={<Facebook/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
