import React from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import './styles/App.css';

function App() {

    const [posts, setPosts] = React.useState([
        { id: 1, title: 'somesing1', body: 'SOMESING_1' },
        { id: 2, title: 'somesing2', body: 'SOMESING_2' },
        { id: 3, title: 'somesing3', body: 'SOMESING_3' }
    ])

    const createPost = (newPost) => {
        setPosts([...posts,newPost])
    }

  return (
      <div className="App">
          <PostForm create={createPost} />
          <PostList posts={posts} title={"Список постов"} />
      </div>
  );
}

export default App;
