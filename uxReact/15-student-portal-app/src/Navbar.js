import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

return (
    <nav className='nav-wrapper #EE6E73'>
        <div className='container'>
        <Link to='/'>Welcome to Student Portal !</Link>
            <ul className = "right">
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/Teachers'>Teachers Contact</Link>
                </li>
                <li>
                <Link to ='/Login'>Login</Link>
                </li>
                <li>
                <Link to ='/FAQ'>FAQ</Link>
                </li>
            </ul>
        </div>
    </nav>
)
}
export default Navbar;