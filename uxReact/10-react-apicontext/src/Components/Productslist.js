import { React, useContext } from 'react';
import {Product} from './Products';
import { ProductContext} from './ProductContext'

export const ProductList =({})=>{
    const [Products, setProducts] = useContext(ProductContext)
    return (
        <div>
        {Products.map((item) => {
            return <Product name = {item.name} price= {item.price} key= {item.id}/>;
        })}
        </div>
    )
}