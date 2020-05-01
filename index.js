import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//let nombre = "marcos"

/*function A(props){
 return <p>Hola {props.nombre}</p>
}

function B(props){
 return <p>{props.nombre} :10</p>
}*/
class Contador extends Component{
  constructor(){
    super();
    this.state = {
      contador:0
    };
  }

  aumentar = ()=>{this.setState({
    contador:this.state.contador+1
    }) 
  };
  
  render(){
    return (<div>
    <p>{this.state.contador}</p> 
    <button onClick={ this.aumentar } >Contar</button>
    </div>);
  }
}


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
        <Contador />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
