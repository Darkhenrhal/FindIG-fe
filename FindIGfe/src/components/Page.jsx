import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 
import Footer from "./Footer/footer";
import Instagram from "./instagram/instagram";
import Facebook from "./facebookpg/facebook";
import Youtube from "./youtube/youtube";
import Tiktok from "./tiktok/tiktok";
const Page = () => {
    return(
        <div className="bg-black3">
            {/* <Instagram/> */}
            <section>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/instagram" element={<Instagram />} />
                <Route path="/tiktok" element={<Tiktok />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/facebook" element={<Facebook/>}/>
            </Routes>
            <Footer/>
            </section>
            
        </div>
    );
}

export default Page;