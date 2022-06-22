import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';
import About from './pages/About';
import Posts from './pages/Posts';


function App() {
  return (  
    <Router>
            <div className='navbar'>
                <div className='navbar__links'>
                  <Link to='/about'>О сайте</Link>
                  <Link to='/posts'> Пости</Link>
                </div>
            </div>
            <Routes>                
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
    </Router>
  );
}
export default App;
