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

    const [selectedSort, setSelectedSort] = React.useState('')
    const [searchQuery, setSearchQuery] = React.useState('')


    const sortedPosts = React.useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;   
    }, [selectedSort, posts])
    
    const sortedAndSearchedPosts = React.useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    },[searchQuery,sortedPosts])


    const createPost = (newPost) => {
        setPosts([...posts,newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort);
    }

  return (
      <div className="App">
          <PostForm create={createPost} />
          <hr style={{margin: '15px 0' }}/>
          <div>
              <MyInput
                  value={searchQuery}
                  onChange={e=>setSearchQuery(e.target.value)}
                  placeholder='Поиск' />
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
          {sortedAndSearchedPosts.length 
              ?
              <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
              :
              <h1 style={{ textAlign: 'center' }}>
                  Пости не найдены
              </h1>
          }
          
      </div>
  );
}

export default App;
