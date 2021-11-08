import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import Logo from '../../assets/logoDoctoraliaBranca.png' 

export const Header = () => {
  return(
    <header>
        <div className='logo'>
          <img alt='logo' src={Logo} className='logo-img'/>
          <h1 className='logo-text'>Doctoralia</h1>
        </div>
        <div className='links'>
          
          <Link to='/' className='linktext'>Especialistas</Link>
          <Link to='/doctors' className='linktext'>Exames</Link>
          <Link to='/' className='linktext'>Segurança de Dados</Link>
          <Link to='/' className='linktext'>Pergunte ao Especialista</Link>
          <section>
            <details className='list-button'>
              <summary style={{color: 'ghostwhite'}}>
                  Inscrever-se
              </summary>
              <section className="options">
                <div className="option">
                  <Link to='/' className='linktextin'>Como Paciente</Link>
                </div>
                <div className="option">
                  <Link to='/' className='linktextin'>Como profissional da Saúde</Link>
                </div>
                <div className="option">
                  <Link to='/' className='linktextin'>Como clinica ou hospital</Link>
                </div>
              </section>
            </details>
            </section>
          <Link to='#' className='linktext'>Entrar</Link>
          <button 
          style={{backgroundColor: 'white', borderRadius: '3px', border: 'none', width: '225px',height: '30px', textAlign: 'center'}}>
            Você é profissional de saúde?
            </button>
        </div>
    </header>
  );
};


