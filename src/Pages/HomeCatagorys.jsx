import { Link } from "react-router-dom";
import "./CSS/style.css";

const HomeCatagorys = () => {
  return (
    <div className='mb-12'>
      <h1 className='font-bold text-3xl text-center uppercase font-serif text-slate-800'>
        <span className='text-[#204d68]'>Catagory </span>of Sales
      </h1>
      <div className='grid grid-rows-3 grid-flow-col container justify-center mx-auto p-4 gap-4 uppercase'>
        <div className='relative catagory row-span-3 col-span-2'>
          {" "}
          <img src='https://i.ibb.co/1MyxJdH/3726.webp' alt='' />
          <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10 sm:py-8 bg-gray-900 text-gray-100'>
            <Link to={`/samsung`}>Samsung</Link>
          </div>
        </div>
        <div className='flex flex-col row-span-3'>
          <div className='relative catagory row-span-2 col-span-2'>
            <img src='https://i.ibb.co/RyQNz5X/298426-450381.png' alt='' />
            <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10  sm:py-8 bg-gray-900 text-gray-100'>
              <Link to={`/apple`}>Iphone</Link>
            </div>
          </div>
          <div className='relative catagory row-span-2 col-span-2'>
            <img
              src='https://i.ibb.co/JtxHK0J/Walton-Primo-S7-Pro.jpg'
              alt=''
            />
            <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10 sm:py-8  bg-gray-900 text-gray-100'>
              <Link to={`/walton`}>Walton</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCatagorys;
