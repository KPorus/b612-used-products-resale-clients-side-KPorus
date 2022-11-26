import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/style.css";

const HomeCatagorys = () => {
  const [samsung, setsamsung] = useState([]);
  const [apple, setapple] = useState([]);
  const [walton, setwalton] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/samsung")
      .then((res) => res.json())
      .then((data) => setsamsung(data));
  }, []);
  let samsungId = samsung.map((id) => id._id);

  useEffect(() => {
    fetch("http://localhost:5000/apple")
      .then((res) => res.json())
      .then((data) => setapple(data));
  }, []);
  let appleId = apple.map((id) => id._id);

  useEffect(() => {
    fetch("http://localhost:5000/walton")
      .then((res) => res.json())
      .then((data) => setwalton(data));
  }, []);
  let waltonId = walton.map((id) => id._id);
  console.log(waltonId[0]);
  return (
    <div>
      <h1 className='font-bold text-3xl text-center uppercase font-serif text-slate-800'>
        <span className="text-[#204d68]">Catagory </span>of Sales
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-4 gap-4 uppercase'>
        <div className='relative catagory'>
          {" "}
          <img src='https://i.ibb.co/1MyxJdH/3726.webp' alt='' />
          <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10 sm:py-8 dark:bg-gray-900 dark:text-gray-100'>
            <Link to={`/samsung/${samsungId[0]}`}>Samsung</Link>
          </div>
        </div>
        <div className='relative catagory'>
          <img src='https://i.ibb.co/RyQNz5X/298426-450381.png' alt='' />
          <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10  sm:py-8 dark:bg-gray-900 dark:text-gray-100'>
            <Link to={`/apple/${appleId[0]}`}>Iphone</Link>
          </div>
        </div>
       <div className='relative catagory'>
       <img src='https://i.ibb.co/JtxHK0J/Walton-Primo-S7-Pro.jpg' alt='' />
        <div className='z-10 absolute left-[30%] top-[40%] flex items-center justify-between p-10 sm:py-8  dark:bg-gray-900 dark:text-gray-100'>
          <Link to={`/walton/${waltonId[0]}`}>Walton</Link>
        </div>
       </div>
      </div>
    </div>
  );
};

export default HomeCatagorys;
