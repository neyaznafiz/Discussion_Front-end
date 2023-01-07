import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopNav from './TopNav';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <TopNav/>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;