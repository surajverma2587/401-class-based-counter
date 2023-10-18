import { useState } from "react";

export const HookCounter = () => {
  // declare our state variable
  const [counter, setCounter] = useState(0);

  const handleClick = ({ target }) => {
    // get button name
    const { name } = target;

    // if increment
    if (name === "increment") {
      setCounter((counter) => counter + 1);
    }

    // if decrement
    if (name === "decrement") {
      setCounter((counter) => (counter > 1 ? counter - 1 : 0));
    }

    // if reset
    if (name === "reset") {
      setCounter(0);
    }
  };

  return (
    <div className="card m-2 p-4">
      <h3 className="text-center">Hook-based counter: {counter}</h3>

      <div className="btn-group" role="group">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-success"
          name="increment"
        >
          Increment
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-danger"
          name="reset"
        >
          Reset
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-warning"
          name="decrement"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
