import React, { useReducer } from "react";
import Calculate from "./Calculate";
import Counter from "./Counter";
import Title from "./Title";
import { UseMemo } from "./UseMemo";
import UseTransition from "./UseTransition";

export const NumberContext = React.createContext();

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
  // useReducer ile count örneği
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      {/*Context kullandık*/}
      <NumberContext.Provider value={{ count, dispatch }}>
        <Calculate />
        <UseMemo />
        <UseTransition />
        <Title />
        <Counter />
      </NumberContext.Provider>
    </>
  );
}

export default App;
