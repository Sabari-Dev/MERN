import { useReducer } from "react";
const UseReducer = () => {
  const reduceFun = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return console.log(state);
    }
  };
  let initialValue = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reduceFun, initialValue);

  return (
    <div className="state">
      <h1 className="number">{state.count}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
          })
        }
      >
        Decrement
      </button>
      {"  "}
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        Reset
      </button>
      {"  "}
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        Increment
      </button>
    </div>
  );
};
export default UseReducer;
