
import { useEffect, useState } from 'react';
import MyButton from './../components/UI/button/MyButton';
import MyModal from './../components/UI/MyModal/MyModal';
import PostFilter from './../components/PostFilter';
import PostList from './../components/PostList';
import Pagination from './../components/UI/pagination/Pagination';
import Loader from './../components/UI/Loader/Loader';
import { getPageArray, getPageCount } from './../utils/pages';
import './../styles/App.css';
import PostService from './../API/PostService';
import { usePosts } from '../hooks/usePost';
import { useFetching } from './../hooks/useFetching';
import PostForm from './../components/PostForm';






function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: '15px' }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}
export default Posts;