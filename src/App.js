import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';


function App() {
  return (  
    <Router>
        <Navbar />
        <AppRouter/>
    </Router>
  );
}
export default App;
