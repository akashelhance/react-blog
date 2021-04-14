import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form>
                    <input type="text" placeholder="Search" />
                    <img  className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
                </form>
                
            </div>
        </div>
       )

}

export default Navbar
