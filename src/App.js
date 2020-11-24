import React, { Component } from "react";
import "./App.css";
import person from "./Person/Person";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sada1", nome: "Eliseu", idade: 22 },
      { id: "fsa1", nome: "Giovanna", idade: 20 },
      { id: "sacgf1", nome: "Soon", idade: 23 },
    ],
    showPerson: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  //Altera o state do ShowPerson: boolean
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                nome={person.nome}
                idade={person.idade}
                key={person.id}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Testando</h1>
        <p className={classes.join(" ")}>Está funcionando</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Exibir
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
