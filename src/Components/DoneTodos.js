import React from "react";
import { useSelector } from "react-redux";
import { ImCheckboxUnchecked } from "react-icons/im";

import List from "./List";
import Container from "../Layout/Container";

const DoneTodos = () => {
  const state = useSelector((state) => state);
  const todos = state.todo.filter((todo) => todo.done === true);

  const icon = <ImCheckboxUnchecked size={20} />;

  return (
    todos.length > 0 && (
      <Container>
        <h2>Tâches terminées</h2>
        <List task={true} icon={icon} />
      </Container>
    )
  );
};

export default DoneTodos;
