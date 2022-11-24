import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider/AuthProvider";

const Navber = () => {
  const { user, usersignOut } = useContext(AuthContext);
  let handleSignOut = () => {
    usersignOut()
      .then(() => {
        //signout
        toast.success("Logout successfull!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='navbar bg-base-100 container mx-auto'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link to='/' className='font-bold uppercase'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/order' className='font-bold uppercase'>
                Order
              </Link>
            </li>
            <li>
              {user ? (
                <button className='uppercase font-bold' onClick={handleSignOut}>
                  LogOut
                </button>
              ) : (
                <Link className='uppercase  font-bold' to='/login'>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to='/' className='normal-case text-xl'>
          <div className='flex items-center p-2'>
            <img src='../mobile.svg'></img>
            <span className='font-bold uppercase'>Buy&Sell</span>
          </div>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link to='/' className='font-bold uppercase'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/order' className='font-bold uppercase'>
              Order
            </Link>
          </li>
          <li>
            {user ? (
              <button className='uppercase font-bold' onClick={handleSignOut}>
                LogOut
              </button>
            ) : (
              <Link className='uppercase font-bold' to='/login'>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='avatar placeholder'>
          <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
            {user?.photoURL ? (
              <img src={user.photoURL} alt='user'></img>
            ) : (
              <span>MX</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
