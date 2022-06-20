import React from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import './styles/App.css';

function App() {

    const [posts, setPosts] = React.useState([
        { id: 1, title: 'aa', body: 'fgh' },
        { id: 2, title: 'hjk', body: 'rfgh' },
        { id: 3, title: 'bfbhf', body: 'bbb' }
    ])

    const [filter, setFilter] = React.useState({ sort: '', query: ''})
   
    const sortedPosts = React.useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;   
    }, [filter.sort, posts])
    
    const sortedAndSearchedPosts = React.useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query,sortedPosts])


    const createPost = (newPost) => {
        setPosts([...posts,newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=>p.id !== post.id))
    }


  return (
      <div className="App">
          <PostForm create={createPost} />
          <hr style={{margin: '15px 0' }}/>
          <PostFilter
              filter={filter}
              setFilter={setFilter}
          />
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
      </div>
  );
}

export default App;
