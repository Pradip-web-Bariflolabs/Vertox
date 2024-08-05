import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home/Home';


function App() {

  return (
    <>
    <Navbar />
    <Home />
      
    </>
  )
}

export default App
