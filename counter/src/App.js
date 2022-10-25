import React from "react";

import "./index.scss";

function App() {
  const [counter, setCounter] = React.useState(0);

  const inc = () => {
    setCounter((prev) => prev + 1);
  };

  const dec = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button className="minus" onClick={dec}>
          - Минус
        </button>
        <button className="plus" onClick={inc}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
