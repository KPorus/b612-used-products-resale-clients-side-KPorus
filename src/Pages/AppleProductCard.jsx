import React from "react";

const AppleProductCard = ({items,setbookingData}) => {
    let { ProductName,photo,sellerName, details, newPrice, originalPrice, date } = items;
    return (
      <div className='flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100'>
        <div className='flex space-x-4'>
          <div className='flex flex-col space-y-1'>
            <span className='text-sm font-semibold'>{sellerName}</span>
            <span className='text-xs dark:text-gray-400'>{date}</span>
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt=''
            className='object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500'
          />
          <h2 className='mb-1 text-xl font-semibold'>{ProductName}</h2>
          <p className='text-sm dark:text-gray-400'>{details}</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='flex space-x-2 text-sm dark:text-gray-400'>
              <strong>Price: ${newPrice}</strong>
              <strong>Original Price: ${originalPrice}</strong>
          </div>
        </div>
        <label htmlFor="book"className="btn btn-primary font-bold uppercase btn-info" onClick={()=>setbookingData(items)}>Purchase</label>
      </div>
    );
};

export default AppleProductCard;