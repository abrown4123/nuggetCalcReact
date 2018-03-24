import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar';

const title = "Nugget Calculator";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      nuggets: 0
    };
  }

  render() {
    return <InputBar />;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
