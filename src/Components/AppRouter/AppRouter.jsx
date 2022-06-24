import React from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './../../router/index';
import { AuthContext } from './../../context/index';

const AppRouter = () => { 
    const {isAuth, setIsAuth } = useContext(AuthContext);
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>                    
                    < Route
                        key={route.key}
                        element={route.element }
                        path = { route.path }
                        exact = { route.exact }
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    < Route
                        key={route.key}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
            </Routes>

    )
}

export default AppRouter;