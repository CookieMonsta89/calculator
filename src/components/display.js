import React from 'react';

const Display = props => {
    const {display} = props;
    return ( 
        <div className="display" value={display}>
            {display.length !== 0 ? display.length > 10 ? display.substring(1, 10) + "..." : display : '0'}
        </div>
     );
}
 
export default Display;