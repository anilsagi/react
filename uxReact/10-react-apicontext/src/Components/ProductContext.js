import { React, CreateContext, useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [Products, setProducts] = useState([
        {
            name : 'Mobile',
            price : '$250',
            id : 149
        },
        {
            name : 'HeadSet',
            price : '$150',
            id : 155
        },
        {
            name : 'router',
            price : '$90',
            id : 161
        },
    ]);
    return (
        <ProductContext.Provider value = {[Products, setProducts]}>
        {props.children}
        </ProductContext.Provider>
    )

}