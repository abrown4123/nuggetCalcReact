import React, {Component} from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {money: 0};
  }

  render() {
    return (
      <div className='input-bar'>
        <label htmlFor = 'money'>$</label>
        <input
          value = {this.state.money}
          type = 'number'
          min = '0'
          onChange = {event => this.setState({money: event.target.value})}
          />
        <button onClick = {this.onSubmit}>Submit</button>
        <h3 className='numberOfNugs'></h3>
      </div>
    );
  }

  onSubmit=() => {
    let nuggetNumber = document.querySelector('.numberOfNugs');
    const nuggets = this.state.money*4;

    this.props.onMoneyInput(nuggets);

    if (nuggets > -1){
      nuggetNumber.innerHTML = 'You can buy ' + nuggets + ' nuggets.';
    } else{
      nuggetNumber.innerHTML = 'Please enter a valid number.';
    }
  }
}

export default InputBar;
