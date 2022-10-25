import React from "react";
import "./App.css";
import { Todo } from "./components/ToDo";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("todoList")) {
      setTodoList(JSON.parse(localStorage.getItem("todoList")));
    }
  }, []);

  const onClickAddTodo = () => {
    if (!todo) return;
    setTodoList((prev) => [...prev, todo]);
    setTodo("");

    localStorage.setItem("todoList", JSON.stringify([...todoList, todo]));
  };

  console.log(localStorage);

  return (
    <div className="container">
      <div className="todo-block">
        <h1>ToDo List</h1>
        <div className="add-todo">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button onClick={onClickAddTodo}>Add</button>
        </div>
        <ul>
          <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} />
          {todoList.length > 0 && (
            <button className="clear-btn" onClick={() => setTodoList([])}>
              Clear all
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
