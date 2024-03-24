import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NgFameForm } from "./components/NgNameForm";
import { NameForm } from "./components/NameForm";
import { NgTodoList } from "./components/NgTodoList";
import { useDeferredValue, useState } from "react";

let todoList = [
  "TodoTodoTodoTodoTodoTodoTodoTodoTodo",
  "TodoTodoTodoTodo",
  "TodoTodo",
  "TodoTodoTodoTodoTodoTodoTodoTodoTodoTodoTodoTodoTodoTodo",
];

function App() {
  const [limit, setLimit] = useState(10);
  const defeeredLimit = useDeferredValue(limit);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <NgFameForm /> */}
        <NameForm />
      </div>
      <div className="card">
        <input
          type="number"
          onChange={(e) => setLimit(Number(e.target.value))}
          value={defeeredLimit}
        />
        <NgTodoList todo={todoList} limit={limit} />
      </div>
    </>
  );
}

export default App;
