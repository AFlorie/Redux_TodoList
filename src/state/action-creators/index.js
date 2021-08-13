export const addTodo = (task) => {
  return (dispatch) => {
    dispatch({
      type: "addTodo",
      payload: task,
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "deleteTodo",
      payload: id,
    });
  };
};

export const toggleTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "toggleDone",
      payload: id,
    });
  };
};
