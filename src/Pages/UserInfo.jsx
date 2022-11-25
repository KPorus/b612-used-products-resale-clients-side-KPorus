import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from "../component/Loading"

const UserInfo = () => {
    const { isLoading, data: product= [] } = useQuery({
        queryKey: ['userPuduct'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/userProduct/apple`);
          const data = await res.json();
          return data
      }
      })
    
      if (isLoading) {
        return <Loading></Loading>;
      }
      console.log(product);
    return (
        <div>
            <h1 className='font-semibold text-2xl'>User Profile</h1>
        </div>
    );
};

export default UserInfo;