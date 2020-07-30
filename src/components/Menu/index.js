import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
    return(
        <nav className="Menu">
            <Link href="/">
                <img className="Logo" src={Logo} alt="Gameplayflix"></img>
            </Link>
            <Link className="ButtonLink" to="/cadastro/video">Novo vídeo</Link>
        </nav>
    )
}

export default Menu;