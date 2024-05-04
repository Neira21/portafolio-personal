import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio.jsx'
import Projects from './pages/Projects.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/proyectos" element={<Projects />}/>
    </Routes>
  
  </BrowserRouter>
  
  
)
