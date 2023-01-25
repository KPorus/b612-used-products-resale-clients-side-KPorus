import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import "../Pages/CSS/style.css";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className=' text-gray-900'>
      <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
        <div className=' flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl'>
            Hi
            <span className='text-violet-400'></span> Welcome To our platform
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12'>
            Here you will find many type of as per your need. In our platform we
            try to provide our user a satisfied experican
          </p>
          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
            {user?.email ? (
              <Link
                to='/desboard'
                className=' drop-shadow-2xl px-8 py-3 text-lg font-semibold rounded bg-[#085594] text-slate-200'>
                Get started
              </Link>
            ) : (
              <Link
                to='/signUp'
                className=' drop-shadow-2xl px-8 py-3 text-lg font-semibold rounded bg-[#085594] text-slate-200'>
                Get started
              </Link>
            )}
          </div>
        </div>
        <div className=' drop-shadow-xl flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
          <lottie-player
            src='https://lottie.host/23ec7677-2052-407b-bb16-e2ba544a11c1/tlkIrtvyvE.json'
            background='transparent'
            speed='1'
            style={{ width: "500px", height: "500px" }}
            loop
            autoplay></lottie-player>
        </div>
      </div>
    </section>
  );
};

export default Banner;
