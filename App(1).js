import React from 'react';
import PostPage from './components/PostPage';
import './App.css'
function App() {
  return (
    <div>
      <PostPage/>
    </div>
  );
}
import logo from './logo.svg';
import './App.css';

import Signup from './Pages/SignUp';
import UserProfile from './Pages/UserProfile';

import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Twitter from './Pages/Twitter';
import Loginadmin from './Pages/Loginadmin';
import Cart from './Pages/Cart';
function App() {
  return (
    <div className='app-bg'>
    <Router>
       <NavBar />
       <header>

</header>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        
        <Route exact path="/UserProfile" element={<UserProfile />}></Route>
      <Route exact path="/Login" element={<Login />}></Route>
      <Route exact path="/Twitter" element={<Twitter/>}></Route>
      <Route exact path="/Loginadmin" element={<Loginadmin/>}></Route>
      <Route exact path="/Cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
