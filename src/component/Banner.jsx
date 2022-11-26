import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import "../Pages/CSS/style.css";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className=' dark:text-gray-900'>
      <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
        <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl'>
          Hi
            <span className='dark:text-violet-400'></span> Welcome To our
            platform
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12'>
            Here you will find many type of as per your need. In our platform we
            try to provide our user a satisfied experican
          </p>
          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
            {user?.email ? (
              <Link
                to='/desboard'
                className='px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900'>
                Get started
              </Link>
            ) : (
              <Link
                to='/signUp'
                className='px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900'>
                Get started
              </Link>
            )}
          </div>
        </div>
        <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <img
            src='https://i.ibb.co/hWJ873R/Hands-holding-mobile-phones-with-SMS-and-big-letters-on-screens.jpg'
            alt=''
            className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
