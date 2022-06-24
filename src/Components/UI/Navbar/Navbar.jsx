import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthContext } from './../../../context/index';
import MyButton from './../button/MyButton';


const Navbar = () => { 
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className='navbar__links'>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'> Пости</Link>
            </div>
        </div>
    )
}

export default Navbar;