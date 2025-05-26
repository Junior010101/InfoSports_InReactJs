import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons'; 
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoImg from '../assets/icons/logo.ico'; //imagem da logo
import { DarkMode } from '../js/darkmode'; // Função para ativar o modo escuro

export const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const salvarDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(salvarDarkMode);

        if (salvarDarkMode) {
            DarkMode();
        }

    },[]);

    const AtivarDarkMode = () => {
        const MudarDarkMode = !isDarkMode;
        setIsDarkMode(MudarDarkMode);
        localStorage.setItem('darkMode', MudarDarkMode); 
        DarkMode();
    };

    return (
        <>
        {/* Cabeçalho */}
        <header id='header'>
            <nav>
                <div className='logo'><NavLink to={'/'}><img src={logoImg} alt="Logo"/></NavLink></div>
                <h1><NavLink to={'/'}>InfoSports</NavLink></h1>

                <button><NavLink to={'/login'}>Login</NavLink></button>
                <button><NavLink to={'/registro'}>Registro</NavLink></button>
                <button><NavLink to={'/contato'}>Contato</NavLink></button>

                <input onClick={AtivarDarkMode} type="checkbox" id="chk" checked={isDarkMode} readOnly/>
                <label htmlFor='chk'>
                    <div className='fundoBtn'>
                        <FontAwesomeIcon className='fa-moon' icon={faMoon}/>
                        <FontAwesomeIcon className='fa-sun' icon={faSun}/>
                    </div>
                    <div className='ball'/>
                </label>
            </nav>
        </header>
        </>
    );
}
