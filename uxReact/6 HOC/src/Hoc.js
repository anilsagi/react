import React from 'react';

const hoc = (Prospect) => {
    const color = ['red', 'blue', 'orange'];
    const randomColor = color[Math.floor(Math.random() * 3)];
    return(props) => {
        return(
            <div style={{color: randomColor}} >
                <Prospect propVal = {props} />
            </div>
        )
    }
}
export default hoc;