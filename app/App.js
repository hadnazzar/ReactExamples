import React, { Component } from 'react';
import {render} from 'react-dom';
import Ex1Component from './Examples/ex1Component';

class App extends Component {
  render(){
    return (
     <Ex1Component/>
    );
  }
}

render(<App />, document.getElementById('root'));
