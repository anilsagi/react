import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) =>{
    const { firstNa, agE, arr, strOrNum } = props;
    // object destructuring;
    // const firstName = this.props.firstName;
    // const age = this.props.age;
    return(
        <div>
            <p>{firstNa}</p>
            <p>{agE}</p>
            <div>{arr.map(info => {
                return (
                    <div key={info}>
                    {info}</div>
                )
            })}</div>
            <p>{strOrNum}</p>
        </div>
    )
}

//We are validating datatype of props using propTypes
Display.propTypes = {
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number,
    arr: PropTypes.arrayOf(PropTypes.number),
    strOrNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

// We are setting a default value to our props so that if for some reason a particular prop is not available.
Display.defaultProps = {
    firstName: 'lisa'
}

export default Display;

