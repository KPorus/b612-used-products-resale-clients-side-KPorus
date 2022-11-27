import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import Loading from "../component/Loading";

const UserInfo = () => {
  document.title = "User Profile";
  const { user } = useContext(AuthContext);
  const { isLoading, data: userProfile = [] } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const res = await fetch(`https://b612-used-products-resale-server-side-kp-orus.vercel.app/user/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(userProfile);
  return (
    <div>
      <h1 className='font-semibold text-2xl m-2'>User Info</h1>
      {userProfile.map((user) => (
        <>
          <h1 className='font-bold text-xl m-2 bg-[#085594] text-slate-200 p-4'>Name: {user.name}</h1>
          <h2 className='font-bold text-xl m-2 bg-[#085594] text-slate-200 p-4'>Email: {user.email}</h2>
            {
              user.role ==="Seller" &&
              <p className='font-bold text-2xl m-2 bg-[#085594] text-slate-200 p-4'>
                Type of account: Seller
              </p>
            }
            {
              user.role !=="Seller" &&
              <p className='font-bold text-2xl m-2 bg-[#085594] text-slate-200 p-4'>
                Type of account: Buyer
              </p>
            }
        </>
      ))}
    </div>
  );
};

export default UserInfo;
