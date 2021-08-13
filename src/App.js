import "./App.css";

import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import DoneTodos from "./Components/DoneTodos";

function App() {
  return (
    <>
      <AddTodo />
      <TodoList />
      <DoneTodos />
    </>
  );
}

export default App;
