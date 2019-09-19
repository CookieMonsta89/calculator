import React from 'react';
import { connect } from 'react-redux'; 

const Button = props => {
    const { buttons } = props;
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

const mapStateToProps = (state) => (
    {
      buttons:state.buttons
    }  
)
 
export default connect(mapStateToProps)(Button);