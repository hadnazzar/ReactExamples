import React, { Component } from 'react';
import {render} from 'react-dom';
import Ex1Component from './Examples/ex1Component';
import Ex2Props from './Examples/ex2Props';


//Tutorial 2 from facebook.github.com
// Remove /* and */ before run tutorial 2!

class Example1 extends Component {
  render(){
    return (
     <Ex1Component/>
    );
  }
}
class Example2 extends Component {
 render(){
    return (
      <div>
     <Ex2Props author="Hadnazzar" commentText="that is awasome comment!"/>
     <Ex2Props author="Gizos" commentText="that is second awasome comment!"/>
     </div>
    );
  }
}

render(<Example2 />, document.getElementById('root'));
