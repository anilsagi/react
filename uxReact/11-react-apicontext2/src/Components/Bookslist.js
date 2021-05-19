import { React, useContext } from 'react';
import {Book} from './Books';
import { BookContext} from './BookContext';
import './Navstyle.css'

export const BookList =({})=>{
    const [Books, setBooks] = useContext(BookContext)
    return (
        <div>
        <table class="table table-bordered table-dark">
        
        <thead>
        BOOKS GLANCE
        </thead>
                <th>BOOK NAME </th>
                <th>PUBLICATION </th>
                <th>YEAR OF PUBLICATION </th>
        {Books.map((item) => {
            return <Book bookName = {item.bookName} publication = {item.publication} yearOfPublication = {item.yearOfPublication} key= {item.id}/>;
        })}
        
        </table>
        </div>
    )
}