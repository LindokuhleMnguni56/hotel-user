// import logo from './logo.svg';
import './App.css';
import Top from './components/top';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Booking from './components/rooms';
import View from './components/view';
import Book from './components/book';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>

          <Route path = "/"  index element={<Login/>} />
          <Route path = "/sign-up" element={<Register/>}/>
          <Route path = "/Home" element={<Home/>}/> 
          <Route path= "/view" element={<View/>}/>
          <Route path= "/rooms" element={<Booking/>}/>
          <Route path="/book" element={<Book/>}/>
          

        </Routes>

    </Router>
  );
}

export default App;
