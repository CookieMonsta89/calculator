import React from 'react';
import '../../src/App.css'
import ButtonLayout from '../components/buttonLayout';
import Display from '../components/display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        display:"",
    };
  }

  onClick = (button) => {
    if (button === '=') {
        this.setState({
            display: (eval(this.state.display) || "")
        })
    } else if (button === 'CE') {
        this.setState({
            display: "",
        })
    } else if (button === 'C') {
        this.setState({
            display: this.state.display.toString().slice(0, -1)
        })
    } else if (button === 'x^2') {
        let number = this.state.display.split('x^2').join('');
        this.setState({
          display: Math.pow(number, number).toString()
        })
    } else if (button === 'sqrt') {
        let number = this.state.display.split('sqrt').join('');
        this.setState({
          display: Math.sqrt(number).toString()
        })
    } else {
        this.setState({
            display: this.state.display.toString() + button,
        })
    }
  }

  render() {
      const {display} = this.state;
    return (
      <React.Fragment>
        <Display display={display}/>
        <ButtonLayout onClick={this.onClick}/>
      </React.Fragment>
    );
  }
}

export default Calculator;
