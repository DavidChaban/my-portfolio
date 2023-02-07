import "./App.css";
import React from "react";
import {  Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutme from "./components/Aboutme/Aboutme"
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <Layout>
    
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/app' element={<Layout />}></Route>
          <Route path='/aboutme' element={<Aboutme />}></Route>    
          <Route path='/proyects' element={<Proyects />}></Route>   
          <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
         
    </Layout>
  );
}

export default App;
