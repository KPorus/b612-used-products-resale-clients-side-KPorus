import React from 'react';
import toast from 'react-hot-toast';

const OrderListCard = ({ items, refetch }) => {
    let { productName,_id,phone,email,name,price,brand} =items;
  console.log(items);
  let handleDelete = (_id) => {
    fetch(`https://b612-used-products-resale-server-side-kp-orus.vercel.app/orders/${_id}`, {
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
        <div className='flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100'>
        <div className='flex space-x-4'>
          <div className='flex flex-col space-y-1'>
            <span className='text-xs text-gray-400'>{name}</span>
            <span className='text-xs text-gray-400'>{email}</span>
          </div>
        </div>
        <div>
          <h2 className='mb-1 text-xl font-semibold'>{productName}</h2>
          <p className='text-sm text-gray-400'>{brand}</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='flex space-x-2 text-sm text-gray-400'>
            <strong>Price: ${price}</strong>
            <strong>Buyer Number: {phone}</strong>
          </div>
        </div>
        <button
          className='btn text-white bg-[#003566] font-bold uppercase btn-info'
          onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </div>
    );
};

export default OrderListCard;