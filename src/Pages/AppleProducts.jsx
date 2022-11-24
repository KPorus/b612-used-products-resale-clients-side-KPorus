import React from "react";
import { useLoaderData } from "react-router-dom";
import AppleProductCard from "./AppleProductCard";

const AppleProducts = () => {
  let apple = useLoaderData();
  let data = apple[0];
  let { product, _id } = data;
  console.log(product);
  return (
    <div className='container mx-auto'>
      <h1>Apple</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-14'>
        {product.map((items) => (
          <AppleProductCard key={_id} items={items}></AppleProductCard>
        ))}
      </div>
    </div>
  );
};

export default AppleProducts;
