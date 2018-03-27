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
          onChange = {event => this.setState({money: event.target.value})}
          />
        <button onClick = {this.onSubmit}>Submit</button>
      </div>
    );
  }

  onSubmit=() => {
    console.log(this.state.money);
    const nuggets = this.state.money*4;
    this.props.onMoneyInput(nuggets);
  }
}

export default InputBar;
