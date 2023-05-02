import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increase")}>Artır</button>
      <button onClick={() => dispatch("decrease")}>Azalt</button>
      <button onClick={() => dispatch("reset")}>Sıfırla</button>
    </>
  );
}

export default App;
