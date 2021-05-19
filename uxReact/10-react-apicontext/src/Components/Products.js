import React from 'react';
// import './Products-detail-list.css';

export const Product = ({name, price}) => {
    return(
        <div className='Products-detail-list' >
        <table class="table table-bordered table-dark">    
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </table>
        </div>


    )
}