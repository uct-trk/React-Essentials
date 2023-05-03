import { useMemo, useState, useCallback } from "react";
import NumberList from "./NumberList";
import UseRef from "./UseRef";

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useCallback number değiştiğinde methodu tetikle aksi taktirde cacheyi kullan
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  // useMemo
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

      <NumberList getItems={getItems} />
      <UseRef />
    </div>
  );

  function slowFunc(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }
};
