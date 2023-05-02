import { useContext } from "react";
import { NumberContext } from "./App";

const Calculate = () => {
  const { count, dispatch } = useContext(NumberContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increase")}>Artır</button>
      <button onClick={() => dispatch("decrease")}>Azalt</button>
      <button onClick={() => dispatch("reset")}>Sıfırla</button>
    </div>
  );
};

export default Calculate;
