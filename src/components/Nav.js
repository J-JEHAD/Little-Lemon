import React, { useState } from 'react'
import logo from '../images/Logo .svg'

const Nav = () => {
    const [menuOpen, settMenuOpen] = useState(false);

    const toggleMenu = () =>{
        settMenuOpen(!menuOpen);
    }


    return (
        <nav className={'navbar ${menuOpen ? "open" : ""}'}>
            <a href='/'>
                <img src={logo} alt='logo'/>
            </a>

            {/* mobile navbar*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav items*/}
            <ul className={'nav-links ${menuOpen ? "visible" : ""'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Servies</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservation</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>


        </nav>
    )
}

export default Nav;