import { React, CreateContext, useState, createContext } from 'react';

export const BookContext = createContext();

export const BookProvider = (props) => {
    const [Books, setBooks] = useState([
        {
            bookName : 'AN INTRODUCTION TO REACT IN 30 BITE-SIZE MORSELS',
            publication : 'FULLSTACK.io',
            yearOfPublication : 2019 ,

            id : 25
        },
        {
            bookName : 'Complete Reference HTML & CSS',
            publication : 'MC GRAW HILL',
            yearOfPublication :2003,

            id : 155
        },
        {
            bookName : 'Complete Reference HTML & CSS',
            publication : 'MC GRAW HILL',
            yearOfPublication :2003,

            id : 161
        },
    ]);
    return (
        <BookContext.Provider value = {[Books, setBooks]}>
        {props.children}
        </BookContext.Provider>
    )

}