import React, {Component} from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {money: 0};
  }

  render() {
    const nuggets = Math.floor(this.state.money*4);

    return (
      <div className='input-bar'>
        <label htmlFor = 'money'>$</label>
        <input
          value = {this.state.money}
          type = 'number'
          min = '0'
          onChange = {event => this.setState({money: event.target.value})}
          />
        <button onClick = {event => this.onSubmit(event)}>Submit</button>
        <h3 className='numberOfNugs'>
          {
          nuggets > 0
          ?
          "You can buy " + nuggets + " nuggets."
          :
          "Please enter a valid number."
          }
        </h3>
      </div>
    );
  }

  onSubmit(event){
    document.getElementById('app').style.display = 'block';
    this.props.onMoneyInput(Math.floor(this.state.money*4));
  }
}

export default InputBar;
