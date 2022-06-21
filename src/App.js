import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import './styles/App.css';
import MyModal from './components/UI/MyModal/MyModal';
import {usePosts} from './hooks/usePost.js';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';


function App() {
    const [posts, setPosts] = React.useState([]);
    const [filter, setFilter] = React.useState({ sort: '', query: '' });
    const [modal, setModal] = React.useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setIsPostsLoading]=useState(false)

    useEffect(() => {
        fetchPosts() 
    },[])
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostsLoading(true);
        const posts = await PostService.getAll();
        setPosts(posts);
        setIsPostsLoading(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=>p.id !== post.id))
    }


  return (
      <div className="App">
          <MyButton style={{marginTop:'15px'}} onClick={()=>setModal(true)}>
              Создать пользователя
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} />
          </MyModal>
          <hr style={{margin: '15px 0' }}/>
          <PostFilter
              filter={filter}
              setFilter={setFilter}
          />
          {isPostsLoading
              ? <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}><Loader /></div>
              : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
              
          }
         
      </div>
  );
}

export default App;
