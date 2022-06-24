
import About from './../pages/About';
import Posts from './../pages/Posts';
import Login from './../pages/Login';
import PostIdPage from './../pages/PostsIdPage';

export const privateRoutes = [
    { key: 1, path: '/about', element: <About/>, exact: false },
    { key: 2, path: '/posts', element: <Posts/>, exact: true },
    { key: 3, path: '/posts/:id', element: <PostIdPage/>, exact: true }
]

export const publicRoutes = [
    { key: 1, path: '*', element: <Login />, exact: false },
]