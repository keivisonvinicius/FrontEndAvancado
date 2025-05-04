import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
       <Link to="/">Inicial</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/a-faculdade">A faculdade</Link>
        <Link to="/dpo-lgpd">DPO Lgpd</Link>
        <Link to="/noticias">Noticias</Link>
    </nav>
  )
}

export default Navbar