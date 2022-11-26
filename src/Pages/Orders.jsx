import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import Loading from "../component/Loading";
import OrderListCard from "./OrderListCard";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    refetch,
    data: userOrder = [],
  } = useQuery({
    queryKey: ["userOrder"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(userOrder);
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl uppercase font-bold text-center border-b-8 m-2'>
        Orders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
        {userOrder.map((items) => (
          <OrderListCard
            key={items._id}
            items={items}
            refetch={refetch}></OrderListCard>
        ))}
      </div>
    </div>
  );
};

export default Orders;
