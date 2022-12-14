import './App.scss';
import Navbar from './static/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fotos from './pages/Fotos';
import About from './pages/About';
import Coding from './pages/Coding';
import More from './pages/More';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/gallery' element={<Fotos></Fotos>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/projects' element={<Coding></Coding>}></Route>
    <Route path='/more' element={<More></More>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
