import { NavLink } from 'react-router-dom';

export function AppHeader() {

    return (
        <header className="app-header">
            <NavLink to="/">
                <img src='./img/lazarof.png' className='app-logo'></img>
            </NavLink>
            <nav >
                <NavLink to="/">Code</NavLink> |
                <NavLink to="/about">About</NavLink>
            </nav >

        </header >
    )
}
