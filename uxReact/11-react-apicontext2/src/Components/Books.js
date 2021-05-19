import React from 'react';
// import './Books-detail-list.css';

export const Book = ({bookName, publication, yearOfPublication}) => {
    return(     
        <tr>
                <td>{bookName}</td>
                <td>{publication}</td>
                <td>{yearOfPublication}</td>
        </tr>
    )
}