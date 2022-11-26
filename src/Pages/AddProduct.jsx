import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [brandName, setbrandName] = useState("");

  const imageHostKey = "352df8fe2fc9dcd8f6c608a683804722";


  let addProduct = (e) => {
    e.preventDefault();
    let form = e.target;
    let sellerName = form.name.value;
    let ProductName = form.ProductName.value;
    let email = form.email.value;
    let newPrice = form.price.value;
    let originalPrice = form.OriginalPrice.value;
    let details = form.details.value;
    let img = e.target.image.files;
    let brand = document.querySelector("#brand").value;
    console.log(brand);
    setbrandName(brand);

    const image = img[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          let userProduct = {
            sellerName,
            img,
            ProductName,
            brandName,
            email,
            newPrice,
            originalPrice,
            details,
            photo: imgData.data.url,
          };

          // save doctor information to the database
          console.log(userProduct);
          fetch(`http://localhost:5000/userProduct`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Product has beed added");
            });
        }
      });
  };

  document.title = "Add product";
  return (
    <div className='container mx-auto'>
      <h1 className='uppercase font-semibold text-2xl border-b-8 text-center'>
        Add Your product
      </h1>
      <section className='p-6 dark:bg-gray-800 dark:text-gray-50 m-6'>
        <form
          onSubmit={addProduct}
          novalidate=''
          action=''
          className='container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid m-12'>
          <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
            <div className='space-y-2 col-span-full lg:col-span-1'>
              <p className='font-medium'>Product Inormation</p>
              <p className='text-xs'>
                Please Provide your product information!!
              </p>
            </div>
            <div className='grid grid-cols-6 gap-4 col-span-full  lg:col-span-3'>
              <div className='col-span-full sm:col-span-3'>
                <label htmlFor='name' className='text-sm'>
                  Seller Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  placeholder='seller name'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full sm:col-span-3'>
                <label htmlFor='img' className='text-sm'>
                  Product photo
                </label>
                <input
                  id='img'
                  name='image'
                  type='file'
                  required
                  placeholder='Product name'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full sm:col-span-3'>
                <label htmlFor='ProductName' className='text-sm'>
                  Product name
                </label>
                <input
                  id='ProductName'
                  name='ProductName'
                  type='text'
                  required
                  placeholder='Product name'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <div className='col-span-full sm:col-span-3'>
                <label htmlFor='brand' className='text-sm'>
                  Brand name
                </label>
                <select
                  id='brand'
                  className='select select-bordered w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                  required>
                  <option disabled selected>
                    Select a Brand Name
                  </option>
                  <option>samsung</option>
                  <option>apple</option>
                  <option>walton</option>
                </select>
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
                  required
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
                  required
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
                  required
                  placeholder='Please enter original price'
                  className='w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                />
              </div>
              <input className='btn btn-primary mt-6' type='submit'></input>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
