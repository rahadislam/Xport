import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.gif';

const Header = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/contuct">Contuct us</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/about">About us</Link></li>
                    </ul>
                </div>
{/*                 
                    <img src={logo} className='w-20 h-20'></img> */}
               
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contuct">Contuct Us</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/about">About us</Link></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;