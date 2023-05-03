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

// useRef, React'ta bir referans veya işaretçi oluşturmak için kullanılan bir hook'tur. useRef hook'u, bir değeri saklamak ve bu değere erişmek için kullanılabilir. useRef, state oluşturmak yerine daha basit bir alternatiftir ve genellikle DOM işlemleri yapmak için kullanılır.

// Birkaç avantajı şunlardır:

// useRef, fonksiyon bileşenlerinde de kullanılabilir.

// useRef, bileşenin yeniden render edilmesi durumunda değerini korur.

// useRef, bir değişkenin değerini güncellemek ve erişmek için kullanılabilir.

// useRef, önceki değerini hatırlayan bir işaretçi olduğu için useEffect hook'larında da kullanılabilir.
