import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import UserSeller from "../Hooks/UserSeller"
import UserAdmin from "../Hooks/UserAdmin"
import { AuthContext } from '../component/context/AuthProvider/AuthProvider';

const Desboard = () => {
    const {user} = useContext(AuthContext);
    let [isSeller] = UserSeller(user?.email)
    let [isAdmin] = UserAdmin(user?.email)
    return (
        <div className='container mx-auto'>
            
            <div className="drawer drawer-mobile">
                <input id="desboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* // Page content here */}
                    <h1 className='font-bold text-3xl mb-4 border-b-8 border-l-accent-focus'>Desboard</h1>
                    <UserInfo></UserInfo>
                </div>
                <div className="drawer-side">
                    <label htmlFor="desboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            !isSeller  &&
                            <li><Link to="/order" className='font-bold uppercase'>Your Placed orders</Link></li>
                        }
                        {
                            isSeller &&
                            <>
                            <li><Link to="/addProduct" className='font-bold uppercase'>Add product</Link></li>
                            <li><Link to="/youProduct" className='font-bold uppercase'>your product</Link></li>
                            <li><Link to="/purchaseOrder" className='font-bold uppercase'>Booked Order</Link></li>
                           </>
                        }
                        {
                            isAdmin &&
                           <>
                            <li><Link to="/allProduct" className='font-bold uppercase'>All product</Link></li>
                            <li><Link to="/buyer" className='font-bold uppercase'>Buyer</Link></li>
                            <li><Link to="/seller" className='font-bold uppercase'>Seller</Link></li>
                           </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Desboard;