import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}

export default App;
