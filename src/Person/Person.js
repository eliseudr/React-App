import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Me chamo {props.nome} e tenho {props.idade} anos de idade
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
