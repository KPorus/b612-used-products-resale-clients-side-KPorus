import { useQuery } from "@tanstack/react-query";
import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import SamsungProductCard from "./SamsungProductCard";


const SamsungProducts = () => {
  const { isLoading, error, data: product= [] } = useQuery({
    queryKey: ['userPuduct'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/userProduct/samsung`);
      const data = await res.json();
      return data
  }
  })

  // let samsung = useLoaderData();
  // let data = samsung[0];
  // let { product,_id } = data;
  console.log(product);
  return (
    <div className='container mx-auto'>
      <h1>Samsung</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-14">
        {product.map((items) => (
          <SamsungProductCard items={items}></SamsungProductCard>
        ))}
      </div>
    </div>
  );
};

export default SamsungProducts;
