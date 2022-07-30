import './App.scss';
import Navbar from './static/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
