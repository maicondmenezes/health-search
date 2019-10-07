import React from 'react';
import {Link} from 'react-router';

const NavBar = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/' className="navbar-brand">Health Care Rooter</Link>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/Home' className="nav-link">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Categories' className="nav-link">Especialidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Profiles' className="nav-link">Perfis</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/About' className="nav-link">Sobre</Link>
                    </li>                    
                </ul>                
            </div>
        </nav>
    );
};

export default NavBar;