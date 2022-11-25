import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../component/Loading";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import SellerProductCard from "./SellerProductCard";
import { Link } from "react-router-dom";

const YourProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    refetch,
    data: product = [],
  } = useQuery({
    queryKey: ["userPuduct"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/userProduct/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(product);
  return (
    <div className='container mx-auto '>
      <h1 className='upperCase text-slate-800 font-bold text-4xl text-center'>
        My Product
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-4'>
        {product.map((items) => (
          <SellerProductCard
            items={items}
            refetch={refetch}></SellerProductCard>
        ))}
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

export default YourProduct;
