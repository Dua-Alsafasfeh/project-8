import React from 'react';
import Login from './components/login';
import './App.css';
import Users from "./components/Users"
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/log" element={<Login />}/>
          
          <Route path="/home" element={<Users />}/>
          </Routes>
      </BrowserRouter>
 
  );
}

export default App;
