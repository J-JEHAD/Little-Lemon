import React from 'react'
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Organic Food Is Good For Health</h2>
                    {/* <h3>Bla</h3> */}
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <Link to="/Booking"><button aria-label='On Click'>Reserve Tale</button></Link>
                </div>
            </section>
        </header>
    )
}

export default Header;