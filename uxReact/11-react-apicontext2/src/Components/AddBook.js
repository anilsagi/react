import React, { useContext, useState } from 'react';
import {BookContext} from './BookContext';
import './Navstyle.css'

const AddBook = () => {
    const [bookName, setbookName] = useState('');
    const [publication, setpublication] = useState('');
    const [yearOfPublication, setyearOfPublication] = useState('');
    const [Books, setBooks] = useContext(BookContext);

    const updatebookName = (e) => {
        setbookName(e.target.value);
    }

    const updatepublication = (e) => {
        setpublication(e.target.value);
    }

    const updateyearOfPublication = (e) => {
        setyearOfPublication(e.target.value);
    }

    const addBook = (e) => {
        e.preventDefault();
        setBooks((preBooks) => [
            ...preBooks,
            { bookName: bookName, publication: publication, yearOfPublication : yearOfPublication},
           

        ]);

    }
;
    return (
        <form className = "formstyle" onSubmit= {addBook}>
        <input type = "text" bookName= "bookName" value= {bookName} placeholder= "Enter Book Name" onChange = {updatebookName}/>
        <input type = "text" bookName= "publication" value= {publication} placeholder= "Enter publication details" onChange = {updatepublication}/>
        <input type = "text" bookName= "yearofpublication" value= {yearOfPublication} placeholder= "Enter year Of Publication" onChange = {updateyearOfPublication}/>
        <button className = "button">Submit</button>
        </form>
    )
} 
export default AddBook;

