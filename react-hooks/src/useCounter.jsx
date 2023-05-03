import { useState } from "react";

const useCounter = () => {
  const [number, setNumber] = useState(0);
  const increament = () => {
    setNumber((prevNum) => prevNum + 1);
  };
  const decreament = () => {
    setNumber((prevNum) => prevNum - 1);
  };
  const reset = () => {
    setNumber(0);
  };
  return [number, increament, decreament, reset];
};

export default useCounter;
