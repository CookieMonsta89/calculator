import React from "react";
import Button from '../components/button';

const ButtonLayout = props => {
  return (
    <div className="row">
      <Button onClick={props.onClick}/>
    </div>
  );
};

export default ButtonLayout;
