import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Menu() {

  return (
    <nav className="c-menu">
    <Link to="/">Lista</Link>
    <Link to="/capturado">Capturado</Link>
    <Link to="/aleatorios">Aleatorios</Link>
    <Link to="/usuario">Usuario</Link>
    <Link to="/favoritos">Favoritos</Link>
  </nav>
   )
}

export default Menu