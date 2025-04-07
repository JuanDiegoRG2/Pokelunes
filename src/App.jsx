import { useState } from 'react'
import './App.css'
import Aleatorios from './componentes/aleatorios'
import Capturados from './componentes/capturados'
import Favoritos from './componentes/favoritos'
import Lista from './componentes/lista'
import Pokemon from './componentes/pokemon'
import Usuario from './componentes/usuario'
import Menu from './componentes/menu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
 <Router>
  <Menu/>
  <Routes>
  <Route path="/" element={<Lista />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/pokemon" element={<Pokemon />} />
  </Routes>
 </Router>
   )
}

export default App
