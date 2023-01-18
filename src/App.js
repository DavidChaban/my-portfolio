import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/app' element={<Layout />}></Route>
        </Routes>
    </Layout>
  );
}

export default App;
