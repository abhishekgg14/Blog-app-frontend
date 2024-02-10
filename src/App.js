import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Add from './components/Add';
import Nav from './components/Nav';
import Viewall from './components/Viewall';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/add' element={<Add/>} />
            <Route path='/view' element={<Viewall/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
