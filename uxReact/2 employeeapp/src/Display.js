import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) =>{
    const { employeeId, namE, Age, city,Designation } = props;
    return(
        <div>
        
           
        </div>
    )
}

//We are validating datatype of props using propTypes
Display.propTypes = {
    employeeId: PropTypes.number.isRequired,
    namE: PropTypes.number,
    Age: PropTypes.number,
    city: PropTypes.string,
    Designation: PropTypes.string,
}
export default Display;

/*<p>{employeeId}</p>
<p>{namE}</p>
<p>{Age}</p>
<p>{city}</p>
<p>{Designation}</p>*/
