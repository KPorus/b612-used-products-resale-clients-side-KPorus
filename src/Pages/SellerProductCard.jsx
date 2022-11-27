import React from "react";
import toast from "react-hot-toast";

const SellerProductCard = ({ items, refetch }) => {
  let {
    brandName,
    location,
    currentDate,
    ProductName,
    _id,
    photo,
    details,
    newPrice,
    originalPrice,
    date,
  } = items;

  console.log(items);
  let handleDelete = (_id) => {
    fetch(`https://b612-used-products-resale-server-side-kp-orus.vercel.app/userProduct/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`deleted successfully`);
        }
      });
  };

  return (
    <div className='flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100'>
      <div className='flex space-x-4'>
        <div className='flex flex-col space-y-1'>
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
        <h2 className='mb-1 text-sm font-semibold'>{brandName}</h2>
        <p className='text-lg dark:text-gray-400 mt-2 mb-2'>Details: {details}</p>
        <strong>
          {" "}
          <p className='text-sm dark:text-gray-400'>Post on: {currentDate}</p>
          <p className='text-sm dark:text-gray-400'>Location: {location}</p>
        </strong>
      </div>
      <div className='flex flex-wrap justify-between'>
        <div className='flex space-x-2 text-sm dark:text-gray-400'>
          <strong>Price: ${newPrice}</strong>
          <strong>Original Price: ${originalPrice}</strong>
        </div>
      </div>
      <button
        className='btn btn-primary bg-[#003566] text-white font-bold uppercase btn-info'
        onClick={() => handleDelete(_id)}>
        Delete
      </button>
    </div>
  );
};

export default SellerProductCard;
