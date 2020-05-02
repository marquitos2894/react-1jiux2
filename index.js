import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import Contador from './Contador';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "marcos";
    return (
      <div>
        <Hello name={this.state.name} />
        <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
