import React from 'react'
import './App.css';
import Header from "./components/Header"
//Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from './components/SideBar';
import Main from './components/Main';


function App() {
  return <>
    <Header />
    <SideBar/>
    <Main/>
  </>
}

export default App;
