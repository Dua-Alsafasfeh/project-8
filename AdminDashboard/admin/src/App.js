import React from 'react';
import Login from './components/login';
import Home  from './Home';
import './App.css';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
