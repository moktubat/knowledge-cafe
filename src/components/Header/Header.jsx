import React from 'react';
import './Header.css';
import logo from '../../assets/admin.jpg';

const Header = () => {
    return (
        <div>
            <nav>
                <h3>Props Technologies</h3>
                <div className='menu'>
                    <a href="#">Home</a>
                    <a href="#">Blogs</a>
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;