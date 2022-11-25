import React, { useContext } from "react";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  let addProduct =(e)=>
  {
    e.preventDefault();
    let form = e.target;
    let ProductName = form.ProductName.value;
    let brandName = form.brandName.value;
    let email = form.email.value;
    let newPrice = form.price.value;
    let originalPrice = form.OriginalPrice.value;
    let details = form.details.value;
   
    let userProduct ={
        ProductName,
        brandName,
        email,
        newPrice,
        originalPrice,
        details
    }
    console.log(userProduct );
    if(brandName === "samsung")
    {
        fetch(`http://localhost:5000/userProduct`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProduct)
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    }
  }

  document.title = "Add product"
  return (
    <div className='container mx-auto'>
      <h1 className='uppercase font-semibold text-2xl'>Add Your product</h1>
      <section className='p-6 dark:bg-gray-800 dark:text-gray-50'>
        <form
          onSubmit={addProduct}
          novalidate=''
          action=''
          className='container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid'>
          <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
            <div className='space-y-2 col-span-full lg:col-span-1'>
              <p className='font-medium'>Product Inormation</p>
              <p className='text-xs'>
                Please Provide your product information!!
              </p>
            </div>
            <div className='grid grid-cols-6 gap-4 col-span-full  lg:col-span-3'>
              <div className='col-span-full sm:col-span-3'>
                <label htmlFor='ProductName' className='text-sm'>
                  Product name
                </label>
                <input
                  id='ProductName'
                  name='ProductName'
                  type='text'
                  placeholder='Product name'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full sm:col-span-3'>
                <label htmlFor='brandName' className='text-sm'>
                  Brand name
                </label>
                <input
                  id='brandName'
                  name='brandName'
                  type='text'
                  placeholder='Brand name'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full sm:col-span-3'>
                <label htmlFor='email' className='text-sm'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email'
                  defaultValue={user?.email}
                  readOnly
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full'>
                <label htmlFor='details' className='text-sm'>
                  Details
                </label>
                <input
                  id='details'
                  name='details'
                  type='text'
                  placeholder='Please Explain your Product'
                  className='w-full input input-bordered  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full sm:col-span-2'>
                <label htmlFor='price' className='text-sm'>
                  Price
                </label>
                <input
                  id='price'
                  name='price'
                  type='text'
                  placeholder='Enter your Price'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full sm:col-span-2'>
                <label htmlFor='Original Price' className='text-sm'>
                  Original price
                </label>
                <input
                  id='Original Price'
                  name='OriginalPrice'
                  type='text'
                  placeholder='Please enter original price'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <input className="btn btn-secondary mt-6" type='submit'></input>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
