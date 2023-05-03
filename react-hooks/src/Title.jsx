import React, { useState } from "react";
import useTitle from "./useTitle";

const Title = () => {
  const [num, setNum] = useState(0);

  // custom hook import edildi
  useTitle(num);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>{num}</button>
    </div>
  );
};

export default Title;
