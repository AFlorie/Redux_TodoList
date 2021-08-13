// id that will be incremented with each new todo
let TODO_ID = 0;

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, { id: ++TODO_ID, done: false, task: action.payload }];

    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);

    case "toggleDone":
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].done = !state[index].done;
      return [...state];

    default:
      return state;
  }
};

export default todosReducer;
