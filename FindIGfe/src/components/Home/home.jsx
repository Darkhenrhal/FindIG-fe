import React from "react";

const Home = () => {
  return (
    <section className="px-4 min-h-screen flex items-center">
      <div className="text-center max-w-2xl md:mx-auto max-md:max-w-screen sm:mx-[5%]  mx-[0%]">
        <div>
          <p className="text-xl font-bold text-black4 mb-4">All-In-One Social Media Data Collecting Tool</p>
          <h2 className="text-black5 md:text-5xl pt-4 pb-8 text-7xl font-extrabold mb-4 md:!leading-[55px]">
            Find the Accounts as you need!!!
          </h2>
        </div>

        <div className="text-xl font-bold text-black4 mb-4 grid grid-cols-5 md:grid-cols-5 gap-1 items-center mt-6">
          <h4>Instagram</h4>
          <h4>Facebook</h4>
          <h4>Tiktok</h4>
          <h4>Youtube</h4>
          <h4>Web</h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
