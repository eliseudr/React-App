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
      showPerson: false,
    });
  };

  //Altera o state do ShowPerson: boolean
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    //Quando der o render inicia como false
    let persons = null;

    //Condicional para mostrar a DIV ou nao caso o state do ShowPerson seja TRUE
    if (this.state.showPerson) {
      persons = (
        <div>
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

    return (
      <div className="App">
        <h1>Testando</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Exibir
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
