import React from 'react';

const Display = (props) =>{
    const {displayData} = props;
    const displayInfo = displayData.map(info=>{
        return(
            <div>
            <p>{info.name}</p>
            <p>{info.age}</p>
            <p>{info.designation}</p>
            </div>
        )
    })
    return(
        <div>
        {displayInfo}
        </div>
    )
}

export default Display;