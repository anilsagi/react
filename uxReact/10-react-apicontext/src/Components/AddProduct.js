import React, { useContext, useState } from 'react';
import {ProductContext} from './ProductContext'

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [Products, setProducts] = useContext(ProductContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addProduct = (e) => {
        e.preventDefault();
        setProducts((preProducts) => [
            ...preProducts,
            { name: name, price: `$${price}`},
           

        ]);

    }
;
    return (
        <form onSubmit= {addProduct}>
        <input type = "text" name= "name" value= {name} placeholder= "Enter Item" onChange = {updateName}/>
        <input type = "text" name= "price" value= {price} placeholder= "Enter Price" onChange = {updatePrice}/>
        <button>Submit</button>
        </form>
    )
} 
export default AddProduct;

