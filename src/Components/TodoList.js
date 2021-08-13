import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

import { actionCreators } from "../state/index";

const TodoList = () => {
  const state = useSelector((state) => state);
  const todos = state.todo.filter((todo) => todo.done === false);

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
        <h2>Tâches à faire</h2>
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
                    <FiCheckSquare
                      size={25}
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

export default TodoList;

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
    margin-top: 5px;
    border-bottom: 2px solid lightgrey;
    border-left: 2px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(800px, 100%);
    height: 40px;
    padding: 0.5rem;

    & > span {
      display: flex;
      align-items: center;
      cursor: pointer;

      & > i:first-of-type :hover {
        color: red;
      }

      & > i:last-of-type :hover {
        color: green;
      }
    }
  }
`;
