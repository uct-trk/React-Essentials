import { useMemo, useState } from "react";

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Temayı değiştir
      </button>
      <div style={theme}>{doubleNumber}</div>
    </div>
  );

  function slowFunc(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }
};
