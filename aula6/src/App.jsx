import React from 'react'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'
import Contato from './pages/Contato'
import DpoLgpd from './pages/DpoLgpd'
import Faculdade from './pages/Faculdade'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Inicial/>} />
        <Route path="/noticias" element={<Noticias/>} /> 
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/dpo-lgpd" element={<DpoLgpd/>}/>
        <Route path="/a-faculdade" element={<Faculdade/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App