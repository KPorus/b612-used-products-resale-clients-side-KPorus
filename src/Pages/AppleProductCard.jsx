import React, { useContext } from "react";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";

const AppleProductCard = ({items}) => {
    const { user } = useContext(AuthContext);
    let { title, img, seller, details, newPrice, OriginalPrice, date } = items;
    return (
      <div className='flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100'>
        <div className='flex space-x-4'>
          <img
            alt=''
            src={user?.photoURL}
            className='object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500'
          />
          <div className='flex flex-col space-y-1'>
            <span className='text-sm font-semibold'>{seller}</span>
            <span className='text-xs dark:text-gray-400'>{date}</span>
          </div>
        </div>
        <div>
          <img
            src={img}
            alt=''
            className='object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500'
          />
          <h2 className='mb-1 text-xl font-semibold'>{title}</h2>
          <p className='text-sm dark:text-gray-400'>{details}</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='flex space-x-2 text-sm dark:text-gray-400'>
              <strong>Price: ${newPrice}</strong>
              <strong>Original Price: ${OriginalPrice}</strong>
          </div>
        </div>
        <button className="btn btn-primary font-bold uppercase btn-info">Purchase</button>
      </div>
    );
};

export default AppleProductCard;