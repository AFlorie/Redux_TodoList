import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

import List from "./List";
import Container from "../Layout/Container";

const TodoList = () => {
  const state = useSelector((state) => state);
  const todos = state.todo.filter((todo) => todo.done === false);

  const icon = <FiCheckSquare size={25} />;

  return (
    todos.length > 0 && (
      <Container>
        <h2>Tâches à faire</h2>
        <List task={false} icon={icon} />
      </Container>
    )
  );
};

export default TodoList;
