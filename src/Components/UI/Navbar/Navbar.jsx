import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthContext } from './../../../context/index';
import MyButton from './../button/MyButton';


const Navbar = () => { 
    const { isAuth, setIsAuth } = useContext(AuthContext)
    
    return (
        <div className='navbar'>
            <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
            <div className='navbar__links'>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'> Пости</Link>
            </div>
        </div>
    )
}

export default Navbar;