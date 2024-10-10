import React from "react";
import Home from "./Home/home";
import Footer from "./Footer/footer";
import Instagram from "./instagram/instagram";

const Page = () => {
    return(
        <div className="bg-black3">
            {/* <Instagram/> */}
            <section>
                <Home/>
                <Footer/>
            </section>
            
        </div>
    );
}

export default Page;