import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../component/Navber';
import Footer from "../component/Footer"
const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;