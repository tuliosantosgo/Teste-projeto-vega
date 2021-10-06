import React from 'react';
import Logo from './imgs/logoVega.png'
 
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <div className="nav--direita">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            TV
                        </li>
                        <li>
                            Filmes
                        </li>
                        <li>
                            Series
                        </li>
                        <li>
                            Favoritos
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-esquerda">
                <img src={Logo}/>
            </div>
        </header>
    );
}