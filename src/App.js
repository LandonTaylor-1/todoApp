import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: '',
      isClicked: false
    };
  }

  onClick = () => {
    this.setState({
      todos: this.state.todos.concat(this.state.text),
      text: "",
      isClicked: true      
    })
  }

  onChange = (go) => {
    console.log(go);
    console.log(go.target.value);
    
    this.setState({
      text: go.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.text} onChange={this.onChange}></input>
        <button onClick={this.onClick}>SUBMIT</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
