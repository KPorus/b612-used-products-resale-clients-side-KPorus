import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const Modal = ({bookingData,setbookingData,refetch}) => {
    console.log(bookingData);
    const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const productName = form.productName.value;
    const purchase = {
      name,
      email,
      phone,
      price,
      productName
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
            setbookingData(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type='checkbox' id='book' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='book'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='text-lg font-bold'>{}</h3>
          <form
            onSubmit={handleBooking}
            className='grid grid-cols-1 gap-3 mt-10'>
            <input
              name='productName'
              type='text'
              defaultValue={bookingData.ProductName}
              disabled
              className='input w-full input-bordered'
            />
            <input
              name='brandName'
              type='text'
              defaultValue={bookingData.brandName}
              disabled
              className='input w-full input-bordered'
            />
            <input
              name='price'
              type='text'
              defaultValue={bookingData.newPrice}
              disabled
              className='input w-full input-bordered'
            />
              <input
                name='email'
                type='email'
                defaultValue={user?.email}
                disabled
                placeholder='Email Address'
                className='input w-full input-bordered'
              />
            <input
              name='name'
              type='text'
              required
              placeholder='Your Name'
              className='input w-full input-bordered'
            />
            <input
              name='phone'
              type='text'
              required
              placeholder='Phone Number'
              className='input w-full input-bordered'
            />
            <br />
            <input
              className='btn btn-primary text-white font-medium w-full'
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
