import React from 'react';
import '../assets/App.css';
import ButtonLayout from '../components/buttonLayout';
import Display from '../components/display';
import { connect } from 'react-redux';
import { updateDisplayAction } from '../store/actions/index';

class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }  

  onClick = (button) => {
    const {display, updateDisplayAction} = this.props;
    if (button === '=') {
        updateDisplayAction((eval(display) || "").toString())
    } else if (button === 'CE') {
        updateDisplayAction("")
    } else if (button === 'C') {
        updateDisplayAction(display.toString().slice(0, -1))
    } else if (button === 'x^2') {
        let number = display.split('x^2').join('');
        updateDisplayAction(Math.pow(number, number).toString())
    } else if (button === 'sqrt') {
        let number = display.split('sqrt').join('');
        updateDisplayAction(Math.sqrt(number).toString())
    } else {
        updateDisplayAction(display.toString() + button)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Display/>
        <ButtonLayout onClick={this.onClick}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => (
    {
      display:state.display
    }  
)

const mapDispatchToProps = {
  updateDisplayAction:updateDisplayAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(calculator);
