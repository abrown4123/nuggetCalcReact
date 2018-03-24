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
          value = {this.state.term}
          type = 'number'
          />
        <button>Submit</button>
      </div>
    );
  }
}

export default InputBar;
