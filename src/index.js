import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar';
import NuggetList from './components/nuggets'

const title = "Nugget Calculator";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      nuggets: 0
    };
  }

  render() {
    return (
      <div>
        <h1>{title}</h1>
        <InputBar onMoneyInput={(nuggets) => this.setState({nuggets})} />
        <NuggetList nuggets={this.state.nuggets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
