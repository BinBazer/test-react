import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './../../pages/About';
import Posts from './../../pages/Posts';
import Error from './../../pages/Error';
import PostsIdPage from './../../pages/PostsIdPage';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route exact path="/posts" element={<Posts />} />
                <Route exact path="/posts/:id" element={<PostsIdPage />} />
                <Route path="*" element={<Error />} />
            </Routes>  
        </div>
    )
}

export default AppRouter;