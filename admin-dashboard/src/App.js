import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from "./components/Header"
import SideBar from './components/SideBar';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import MenuPages from './components/MenuPages';



function App() {
  return <>
    <BrowserRouter>
      <Header />
      <SideBar />
      <Main />
      <div>
      <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/menuPage" element={<MenuPages/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App;
