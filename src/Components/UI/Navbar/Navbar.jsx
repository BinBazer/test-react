import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Navbar = () => { 
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'> Пости</Link>
            </div>
        </div>
    )
}

export default Navbar;