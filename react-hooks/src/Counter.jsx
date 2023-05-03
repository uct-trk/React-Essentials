import useCounter from "./useCounter";

const Counter = () => {
  const [number, increament, decreament, reset] = useCounter();
  return (
    <div>
      <h2>Sayı - {number}</h2>
      <button onClick={increament}>Artır</button>
      <button onClick={decreament}>Azalt</button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  );
};

export default Counter;
