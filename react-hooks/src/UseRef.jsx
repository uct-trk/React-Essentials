import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  //const [render, setRender] = useState(0);
  const render = useRef(0);
  const inputRef = useRef(0);

  useEffect(() => {
    //setRender((prev) => prev + 1);
    render.current = render.current + 1;
  });

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.value = "Ugurcan";
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benım adım {name}</div>
      <div>{render.current} kere render oldu</div>
      <button onClick={focusInput}>Odaklan</button>
    </div>
  );
};

export default UseRef;
