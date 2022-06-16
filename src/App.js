import React from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {

    const [posts, setPosts] = React.useState([
        { id: 1, title: 'somesing1', body: 'SOMESING_1' },
        { id: 2, title: 'somesing2', body: 'SOMESING_2' },
        { id: 3, title: 'somesing3', body: 'SOMESING_3' }
    ])

    const [post, setPost] = React.useState({ title:'',body:''})
  

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, { ...post, id: Date.now() }])
        setPost({ title: '', body: '' })
    }

  return (
      <div className="App">
          <form>
  
              <MyInput
                  value={post.title}
                  onChange={e => setPost({ ...post, title: e.target.value })}
                  type="text"
                  placeholder='название поста' />
              <MyInput
                  value={post.body}
                  onChange={e => setPost({ ...post, body: e.target.value })}
                  type="text"
                  placeholder='описание поста' />
              <MyButton onClick={addNewPost}>создать пост</MyButton>
          </form>
          <PostList posts={posts} title={"Список постов"} />
      </div>
  );
}

export default App;
