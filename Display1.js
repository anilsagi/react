import React from 'react';

const Hello = (props) => {
  const {displayData} = props; //const displayData = this.displayData;
  return(
      <div>
      {displayData.firstName}
      </div>
  )
}
export default Hello;
