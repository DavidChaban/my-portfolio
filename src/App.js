import "./App.css";
import React from "react";
import {  Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
 
import Aboutme from "./components/Aboutme/Aboutme"
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import WebsiteLayout from './layouts/WebsiteLayout';
 
 
 
function App() {
  return (
    <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutme' element={<Aboutme/>}></Route>    
          <Route path='/proyects' element={<Proyects/>}></Route>   
          <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
    </WebsiteLayout>
  );
}

export default App;
