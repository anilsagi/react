import { React, useContext } from 'react';
import './Navstyle.css' 
import { ProductContext } from './ProductContext';

export const Nav = () =>{
    const [Products,setProducts] = useContext(ProductContext)
    return(
        <nav className= "nav-container">
        <h4> Company Name</h4>
        <p>List of Products : {Products.length}</p>
        </nav>

    )
    
};