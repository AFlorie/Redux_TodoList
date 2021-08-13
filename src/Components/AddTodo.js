import React, { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { CgAddR } from "react-icons/cg";

import { actionCreators } from "../state/index";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { addTodo } = bindActionCreators(actionCreators, dispatch);

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodo.length === 0 && setError("veuillez entrer du texte");
    newTodo.length > 1 && addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Container>
      <h1>Ajouter une tâche</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="exemple: faire les courses"
          value={newTodo}
          onChange={(e) => {
            setError("");
            setNewTodo(e.target.value);
          }}
        />
        <button type="submit">
          <CgAddR size={30} />
        </button>
      </form>
      <Error>{error}</Error>
    </Container>
  );
};

export default AddTodo;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 26px;
    font-weight: 700;
  }

  & form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input {
    border: 2px solid light grey;
    width: min(800px, 100%);
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 5px;
    height: 40px;
  }

  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:focus,
    &:hover {
      color: blue;
    }
  }
`;

const Error = styled.div`
  color: red;
  font-weight: 700;
  margin-top: 5px;
`;
