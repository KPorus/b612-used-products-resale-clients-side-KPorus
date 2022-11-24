import React from "react";
import { useLoaderData } from "react-router-dom";
import WaltonProductCard from "./WaltonProductCard";

const WaltonProducts = () => {
  let apple = useLoaderData();
  let data = apple[0];
  let { product, _id } = data;
  console.log(product);
  return (
    <div className="container mx-auto">
      <h1>Walton</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-14'>
        {product.map((items) => (
          <WaltonProductCard key={_id} items={items}></WaltonProductCard>
        ))}
      </div>
    </div>
  );
};

export default WaltonProducts;
