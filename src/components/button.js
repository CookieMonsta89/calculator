import React from 'react';
import {buttons} from '../data/buttonObject';

const Button = props => {
    return ( 
        <React.Fragment>
            {buttons.map((button, idx) => {
                return (
                    <button name={button.name} key={idx} onClick={e => props.onClick(e.target.name)}>
                        {button.name}
                    </button>
                )
            })}
        </React.Fragment>
     );
}
 
export default Button