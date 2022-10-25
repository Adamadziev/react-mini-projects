import React from "react";

export const Todo = ({ todoList, setTodoList }) => {
  const onClickDeleteTodo = (i) => {
    const newTodoList = todoList.filter((todo) => todo !== todoList[i]);

    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  return (
    <>
      {todoList.length > 0 ? (
        todoList.map((todo, i) => {
          return (
            <div key={i} className="todo">
              <div>
                <input type="checkbox" id="input" />
                <label htmlFor="input">
                  <li>{todo}</li>
                </label>
              </div>
              <button onClick={() => onClickDeleteTodo(i)}>
                <svg width="10px" viewBox="0 0 320 512">
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
              </button>
            </div>
          );
        })
      ) : (
        <h4>Список дел пуст</h4>
      )}
    </>
  );
};
