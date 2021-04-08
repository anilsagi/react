import React from 'react';

const Display = (props) => {
  const {displayInfo} = props; //const displayData = this.displayData;
  const displayList = displayInfo.map(info=>{
  return(
      <div key = {info.id}>
      <p>{info.name}</p>
      <p>{info.age}</p>
      </div>
  )
})
return(
  <div>
    {displayList}
  </div>
)
}
export default Display;