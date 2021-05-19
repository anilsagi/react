import { React, useContext } from 'react';
import './Navstyle.css' 
import { BookContext } from './BookContext';

export const Nav = () =>{
    const [Books, setBooks] = useContext(BookContext)
    return(
        <nav className= "nav-container">
        <h4>Welcome Library</h4>
        <p>List of Books : {Books.length}</p>
        </nav>

    )
    
};