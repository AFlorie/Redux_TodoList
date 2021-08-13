import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import { ImCheckboxUnchecked } from "react-icons/im";

import { actionCreators } from "../state/index";

const DoneTodos = () => {
  const state = useSelector((state) => state);
  const todos = state.todo.filter((todo) => todo.done === true);

  const dispatch = useDispatch();
  const { deleteTodo, toggleTodo } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleToggleTodo = (todo) => {
    toggleTodo(todo.id);
  };

  const handleDeleteTodo = (todo) => {
    deleteTodo(todo.id);
  };

  return (
    todos.length > 0 && (
      <Container>
        <h2>Tâches terminées</h2>
        <Task>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <p>{todo.task}</p>
                <span>
                  <i>
                    <FaTrashAlt
                      size={20}
                      onClick={() => handleDeleteTodo(todo)}
                    />
                  </i>
                  <i>
                    <ImCheckboxUnchecked
                      size={20}
                      onClick={() => handleToggleTodo(todo)}
                      style={{ marginLeft: "5px" }}
                    />
                  </i>
                </span>
              </li>
            );
          })}
        </Task>
      </Container>
    )
  );
};

export default DoneTodos;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  & > h2 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 30px;
    font-weight: 700;
  }
`;

const Task = styled.ul`
  padding: 0;

  & > li {
    border-bottom: 2px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(800px, 100%);
    height: 40px;
    padding: 0.5rem 0;
    text-decoration-line: underline line-through;

    & > span {
      display: flex;
      align-items: center;
      cursor: pointer;

      & > i :hover {
        color: red;
      }
    }
  }
`;
