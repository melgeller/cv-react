import './App.scss';
import Navbar from './static/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fotos from './pages/Fotos';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/gallery' element={<Fotos></Fotos>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
