import React from 'react';
import '../../src/App.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        display:"",
        exponent:false,
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
            display: this.state.display.slice(0, -1)
        })
    } else {
        this.setState({
            display: this.state.display + button,
        })
    }
  }



  render() {
      const {display} = this.state;
    return (
      <React.Fragment>
        <div className="display" value={display}>{display}</div>
        <div className="row">
          <button name="(" onClick={e => this.onClick(e.target.name)}></button>
          <button name="C" onClick={e => this.onClick(e.target.name)}>C</button>
          <button name="^" onClick={e => this.onClick(e.target.name)}></button>
          <button name="CE" onClick={e => this.onClick(e.target.name)}>CE</button>
        </div>
        <div className="row">
          <button name="1" onClick={e => this.onClick(e.target.name)}>1</button>
          <button name="2" onClick={e => this.onClick(e.target.name)}>2</button>
          <button name="3" onClick={e => this.onClick(e.target.name)}>3</button>
          <button name="+" onClick={e => this.onClick(e.target.name)}>+</button>
        </div>
        <div className="row">
          <button name="4" onClick={e => this.onClick(e.target.name)}>4</button>
          <button name="5" onClick={e => this.onClick(e.target.name)}>5</button>
          <button name="6" onClick={e => this.onClick(e.target.name)}>6</button>
          <button name="-" onClick={e => this.onClick(e.target.name)}>-</button>
        </div>
        <div className="row">
          <button name="7" onClick={e => this.onClick(e.target.name)}>7</button>
          <button name="8" onClick={e => this.onClick(e.target.name)}>8</button>
          <button name="9" onClick={e => this.onClick(e.target.name)}>9</button>
          <button name="x" onClick={e => this.onClick(e.target.name)}>x</button>
        </div>
        <div className="row">
          <button name="." onClick={e => this.onClick(e.target.name)} >.</button>
          <button name="0" onClick={e => this.onClick(e.target.name)}>0</button>
          <button name="=" onClick={e => this.onClick(e.target.name)}>=</button>
          <button name="/" onClick={e => this.onClick(e.target.name)}>/</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;
