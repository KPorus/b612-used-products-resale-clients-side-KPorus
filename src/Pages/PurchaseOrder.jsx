import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../component/Loading";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import PurchaseBuyerList from "./PurchaseBuyerList";
import { Link } from "react-router-dom";

const PurchaseOrder = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    refetch,
    data: product = [],
  } = useQuery({
    queryKey: ["userPuduct"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/sellerOrder/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
 
  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-4xl text-center border-b-8 mb-2'>
        Your Product Booked
      </h1>

      <div className='overflow-x-auto m-10'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Buyer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((items) => (
              <PurchaseBuyerList
                key={items._id}
                refetch={refetch}
                items={items}
               ></PurchaseBuyerList>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center m-10'>
        <Link
          to='/desboard'
          className='px-8 py-3 font-semibold rounded bg-[#003566] text-white'>
          Back to desboard
        </Link>
      </div>
    </div>
  );
};

export default PurchaseOrder;
