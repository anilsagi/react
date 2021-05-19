import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {


return (
    <nav className='nav-wrapper #EE2124'>
        <div className='container'>
        <Link to='/'>Hi, Welcome !</Link>
            <ul className = "right">
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/Contact'>Contact Us</Link>
                </li>
                <li>
                <Link to ='/Signup'>Signup</Link>
                </li>
            </ul>
        </div>
    </nav>
)
}
export default Navbar;