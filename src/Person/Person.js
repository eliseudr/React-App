import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        Me chamo {props.nome} e tenho {props.idade} de idade
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
