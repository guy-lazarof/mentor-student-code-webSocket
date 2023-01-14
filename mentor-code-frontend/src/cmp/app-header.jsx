import { NavLink } from 'react-router-dom';

import photo from './../scss/img/logo.png';

export function AppHeader() {

    return (
        <header className="app-header">
            <NavLink to="/" className='app-logo'>
                <img className='logo' src={photo} alt="logo" />
            </NavLink>
            <nav className='nav-bar'>
                <NavLink to="/" className='navLink'>Code</NavLink> |
                <NavLink to="/about" className='navLink'>About</NavLink>
            </nav >

        </header >
    )
}
