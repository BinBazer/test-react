
import { useEffect, useState, useRef } from 'react';
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
import { useObserver } from './../hooks/useObserver';






function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const laseElement = useRef()
 
    

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(laseElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
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
                ?????????????? ????????????????????????
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
                <h1>?????????????????? ???????????? ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"???????????? ????????????"} />
            <div ref={laseElement} style={{ height: 20, background: 'red'}}></div>
            {isPostsLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
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