import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <h3>Gestion de Viajes</h3>
            <ul>
                <li>
                    <Link to="/lista">Listado de Viajes</Link>
                </li>
                <li>
                    <Link to ="/nuevo">Nuevo Viaje</Link>
                </li>
            </ul>
            <hr />
        </div>
    )
}

export default Header;