import React from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {

    const [posts, setPosts] = React.useState([
        { id: 1, title: 'aa', body: 'fgh' },
        { id: 2, title: 'hjk', body: 'rfgh' },
        { id: 3, title: 'bfbhf', body: 'bbb' }
    ])

    const [selectedSort,setSelectedSort]= React.useState('')

    const createPost = (newPost) => {
        setPosts([...posts,newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
    }

  return (
      <div className="App">
          <PostForm create={createPost} />
          <hr style={{margin: '15px 0' }}/>
          <div>
              <MySelect
                  value={selectedSort}
                  onChange={sortPost}
                  defaultValue="Сортировка"
                  options={[
                      { value: 'title', name: 'По названию' },
                      { value: 'body', name: 'По описанию' },
                  ]}
              />
          </div>
          {posts.length 
              ?
              <PostList remove={removePost} posts={posts} title={"Список постов"} />
              :
              <h1 style={{ textAlign: 'center' }}>
                  Пости не найдены
              </h1>
          }
          
      </div>
  );
}

export default App;
