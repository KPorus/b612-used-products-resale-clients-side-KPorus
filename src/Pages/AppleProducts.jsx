import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import AppleProductCard from "./AppleProductCard";

const AppleProducts = () => {
  const { isLoading, error, data: product= [] } = useQuery({
    queryKey: ['userPuduct'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/userProduct/apple`);
      const data = await res.json();
      return data
  }
  })
  console.log(product);
  return (
    <div className='container mx-auto'>
      <h1>Apple</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-14'>
        {product.map((items) => (
          <AppleProductCard  items={items}></AppleProductCard>
        ))}
      </div>
    </div>
  );
};

export default AppleProducts;
