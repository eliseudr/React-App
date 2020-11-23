import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { nome: "Eliseu", idade: 22 },
      { nome: "Giovanna", idade: 20 },
      { nome: "Soon", idade: 23 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      person: [
        { nome: "Lucas", idade: 22 },
        { nome: "Giovanna", idade: 20 },
        { nome: "Soon", idade: 23 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Testando</h1>
        <button onClick={this.switchNameHandler}>Trocar nome</button>
        <Person
          nome={this.state.person[0].nome}
          idade={this.state.person[0].idade}
        />
        <Person
          nome={this.state.person[1].nome}
          idade={this.state.person[1].idade}
        />
        <Person
          nome={this.state.person[2].nome}
          idade={this.state.person[2].idade}
        />
      </div>
    );
  }
}

export default App;
