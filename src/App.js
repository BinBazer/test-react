import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import { AuthContext } from './context/index';


function App() {
    const [isAuth, setIsAuth]= useState(false)
    return (  
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <Router>
                <Navbar />
                <AppRouter/>
            </Router>
        </AuthContext.Provider>
  );
}
export default App;
