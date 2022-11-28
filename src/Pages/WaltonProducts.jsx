import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../component/Loading";
import Modal from "../component/Modal";
import WaltonProductCard from "./WaltonProductCard";

const WaltonProducts = () => {
  const [bookingData, setbookingData] = useState(null);
  const {
    isLoading,refetch,
    data: product = [],
  } = useQuery({
    queryKey: ["userPuduct"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/userProduct/walton`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className='container mx-auto'>
      <h1 className="font-bold text-4xl text-center uppercase text-slate-800">Walton</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-14'>
        {product.map((items) => (
          <WaltonProductCard items={items} setbookingData={setbookingData}></WaltonProductCard>
        ))}
      </div>
      {bookingData && (
        <Modal
          bookingData={bookingData}
          setbookingData={setbookingData}
          refetch={refetch}></Modal>
      )}
    </div>
  );
};

export default WaltonProducts;
