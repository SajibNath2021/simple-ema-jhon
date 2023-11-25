import React from 'react';
import image from "../../../images/Logo.svg";
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <img src={image} alt="" />
            <div>
                <a href="/Oder">Oder</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;