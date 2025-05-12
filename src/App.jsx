import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppProvider } from './contexto/contexto';


import Menu from './componentes/menu'
import Aleatorios from './componentes/aleatorios';
import Lista from './componentes/lista';
import Capturados from './componentes/capturados';
import Favoritos from './componentes/favoritos';
import Usuarios from './componentes/usuario';
import Pokemon from './componentes/pokemon';

function App() {

  return (
    <AppProvider>
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>

    </Router>
    </AppProvider>
  );
}

export default App;
