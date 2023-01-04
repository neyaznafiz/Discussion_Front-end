import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopNav from './TopNav';

const Main = () => {
    return (
        <div>
            <TopNav/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;