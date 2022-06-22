import { BrowserRouter as Router,Route, Routes, Switch} from 'react-router-dom';
import './styles/App.css';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';


function App() {
  return (  
    <Router>
        <Navbar/>
        <Routes>                
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    </Router>
  );
}
export default App;
