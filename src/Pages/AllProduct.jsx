import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";

const AllProduct = () => {
  const {
    isLoading,
    refetch,
    data: Allproduct = [],
  } = useQuery({
    queryKey: ["Allproduct"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allProduct`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(Allproduct);
  return (
    <div className='container mx-auto'>
      <h1 className='uppercase text-4xl text-center font-bold border-b-8 m-2'>
        All Product
      </h1>
      <div className='overflow-x-auto m-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Seller Email</th>
              <th>Seller Name</th>
              <th>New Price</th>
              <th>Old Price</th>
            </tr>
          </thead>
          <tbody>
            {Allproduct.map((Allproduct, i) => (
              <tr key={Allproduct._id}>
                <th>{i + 1}</th>
                <td>{Allproduct.ProductName}</td>
                <td>{Allproduct.email}</td>
                <td>{Allproduct.sellerName}</td>
                <td>{Allproduct.newPrice}</td>
                <td>{Allproduct.originalPrice}</td>
                {/* <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className='btn btn-xs btn-primary'>
                      Make Admin
                    </button>
                  )}
                </td> */}
                {/* <td>
                  <button className='btn btn-xs btn-danger'>Delete</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center m-10">
        <Link
          to='/desboard'
          className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'>
          Back to desboard
        </Link>
      </div>
    </div>
  );
};

export default AllProduct;
