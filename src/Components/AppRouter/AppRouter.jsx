import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './../../pages/About';
import Posts from './../../pages/Posts';
import PostsIdPage from './../../pages/PostsIdPage';
import { routes } from './../../router/index';

const AppRouter = () => { 
    return (
        <div>
            <Routes>
                {routes.map(route =>                    
                    < Route
                        key={route.key}
                        element={route.element }
                        path = { route.path }
                        exact = { route.exact }
                    />
                )}
            </Routes>  
        </div>
    )
}

export default AppRouter;