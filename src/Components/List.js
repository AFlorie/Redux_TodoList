import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

import { actionCreators } from "../state/index";

const List = ({ task, icon }) => {
  const state = useSelector((state) => state);
  const todos = state.todo.filter((todo) => todo.done === task);

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
    <Task>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <p className={`${todo.done ? "lineTrough" : undefined}`}>
              {todo.task}
            </p>
            <span>
              <i>
                <FaTrashAlt size={20} onClick={() => handleDeleteTodo(todo)} />
              </i>
              <i
                onClick={() => handleToggleTodo(todo)}
                style={{ marginLeft: "5px" }}
              >
                {icon}
              </i>
            </span>
          </li>
        );
      })}
    </Task>
  );
};

export default List;

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

  .lineTrough {
    text-decoration-line: line-through;
  }
`;
