import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Link from '../Link/Link';

const Header = () => {
    return (
        <div>
           <Link></Link>
           <Outlet></Outlet>
        </div>
    );
};

export default Header;