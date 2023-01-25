import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/style.css";

const HomeCatagorys = () => {
  const [samsung, setsamsung] = useState([]);
  const [apple, setapple] = useState([]);
  const [walton, setwalton] = useState([]);

  useEffect(() => {
    fetch("https://b612-used-products-resale-server-side-kp-orus.vercel.app/samsung")
      .then((res) => res.json())
      .then((data) => setsamsung(data));
  }, []);
  let samsungId = samsung.map((id) => id._id);

  useEffect(() => {
    fetch("https://b612-used-products-resale-server-side-kp-orus.vercel.app/apple")
      .then((res) => res.json())
      .then((data) => setapple(data));
  }, []);
  let appleId = apple.map((id) => id._id);

  useEffect(() => {
    fetch("https://b612-used-products-resale-server-side-kp-orus.vercel.app/walton")
      .then((res) => res.json())
      .then((data) => setwalton(data));
  }, []);
  let waltonId = walton.map((id) => id._id);
  console.log(waltonId[0]);
  return (
    <div className='mb-12'>
      <h1 className='font-bold text-3xl text-center uppercase font-serif text-slate-800'>
        <span className='text-[#204d68]'>Catagory </span>of Sales
      </h1>
      <div className='flex container justify-center mx-auto p-4 gap-4 uppercase'>
        <div className='relative catagory w-[80%]'>
          {" "}
          <img src='https://i.ibb.co/1MyxJdH/3726.webp' alt='' />
          <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10 sm:py-8 bg-gray-900 text-gray-100'>
            <Link to={`/samsung/${samsungId[0]}`}>Samsung</Link>
          </div>
        </div>
        <div className='flex flex-col justify-items-center text-center'>
          <div className='relative catagory w-[45%]'>
            <img src='https://i.ibb.co/RyQNz5X/298426-450381.png' alt='' />
            <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10  sm:py-8 bg-gray-900 text-gray-100'>
              <Link to={`/apple/${appleId[0]}`}>Iphone</Link>
            </div>
          </div>
          <div className='relative catagory w-[48%]'>
            <img
              src='https://i.ibb.co/JtxHK0J/Walton-Primo-S7-Pro.jpg'
              alt=''
            />
            <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10 sm:py-8  bg-gray-900 text-gray-100'>
              <Link to={`/walton/${waltonId[0]}`}>Walton</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCatagorys;
