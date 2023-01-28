import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useProducts } from "../component/context/ProductProvider/ProductProvider";
import Loading from "../component/Loading";
import Modal from "../component/Modal";
import ProductCard from "./ProductCard";

const WaltonProducts = () => {
  const [bookingData, setbookingData] = useState(null);
   const {
     state: { products, loading, error },
   } = useProducts();

   let content;

   if (loading) {
     content = <Loading/>;
   }

   if (error) {
     content = <p>Something went wrong</p>;
   }

   if (!loading && !error && products.length === 0) {
     content = <p>Nothing to show, product list is empty</p>;
   }

   if (!loading && !error && products.length) {
     content = products
       .filter((product) => product.brandName === "walton")
       .map((product) => (
         <ProductCard
           key={product._id}
           product={product}
           setbookingData={setbookingData}
         />
       ));
   }
  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-4xl text-center uppercase text-slate-800 mt-4'>
        Walton
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-14'>
        {content}
      </div>
      {bookingData && (
        <Modal
          bookingData={bookingData}
          setbookingData={setbookingData}
          ></Modal>
      )}
    </div>
  );
};

export default WaltonProducts;
