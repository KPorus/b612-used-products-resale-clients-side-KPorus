import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import UserSeller from "../Hooks/UserSeller";
import UserAdmin from "../Hooks/UserAdmin";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import { Box, Tooltip, Typography } from "@mui/material";
import {
  Groups3,
  ProductionQuantityLimits,
  ShoppingCart,
} from "@mui/icons-material";

const Desboard = () => {
  const { user } = useContext(AuthContext);
  let [isSeller] = UserSeller(user?.email);
  let [isAdmin] = UserAdmin(user?.email);
  document.title = "PhoneFlip Desboard";
  return (
    <div className='container mx-auto'>
      <Box className='flex flex-row'>
        <Box>
          <ul className='menu p-4 w-[5rem] sm:w-[19rem] bg-base-100 text-base-content text-sm'>
            {!isSeller && (
              <li>
                <Link to='/order' className='font-bold uppercase'>
                  <ShoppingCart />
                  <span className='sm:block hidden'>Your Placed orders</span>
                </Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to='/addProduct' className='font-bold uppercase'>
                    <ProductionQuantityLimits />
                    <span className='sm:block hidden'>Add product</span>
                  </Link>
                </li>
                <li>
                  <Link to='/youProduct' className='font-bold uppercase'>
                    <span className='sm:block hidden'>your product</span>
                  </Link>
                </li>
                <li>
                  <Link to='/purchaseOrder' className='font-bold uppercase'>
                    <span className='sm:block hidden'>Booked Order</span>
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to='/allProduct' className='font-bold uppercase'>
                    <span className='sm:block hidden'>Products</span>
                  </Link>
                </li>
                <li>
                  <Link to='/buyer' className='font-bold uppercase'>
                    <Tooltip title='Buyers'>
                      <Groups3></Groups3>
                    </Tooltip>{" "}
                    <span className='sm:block hidden'> Buyers</span>
                  </Link>
                </li>
                <li>
                  <Link to='/seller' className='font-bold uppercase'>
                    <Tooltip title='Sellers'>
                      <img
                        alt='selller icons'
                        src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-seller-online-grocery-store-inipagistudio-mixed-inipagistudio.png'></img>
                    </Tooltip>{" "}
                    <span className='sm:block hidden'> Sellers</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </Box>
        <Box flex={1}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "2rem", marginTop: "1rem" }}>
            Desboard
          </Typography>
          <UserInfo></UserInfo>
        </Box>
      </Box>
    </div>
  );
};

export default Desboard;

// // <ul className="menu p-4 w-80 bg-base-100 text-base-content">
//                         {
//                             !isSeller  &&
//                             <li><Link to="/order" className='font-bold uppercase'>Your Placed orders</Link></li>
//                         }
//                         {
//                             isSeller &&
//                             <>
//                             <li><Link to="/addProduct" className='font-bold uppercase'>Add product</Link></li>
//                             <li><Link to="/youProduct" className='font-bold uppercase'>your product</Link></li>
//                             <li><Link to="/purchaseOrder" className='font-bold uppercase'>Booked Order</Link></li>
//                            </>
//                         }
//                         {
//                             isAdmin &&
//                            <>
//                             <li><Link to="/allProduct" className='font-bold uppercase'>All product</Link></li>
//                             <li><Link to="/buyer" className='font-bold uppercase'>Buyer</Link></li>
//                             <li><Link to="/seller" className='font-bold uppercase'>Seller</Link></li>
//                            </>
//                         }
//                     </ul>
