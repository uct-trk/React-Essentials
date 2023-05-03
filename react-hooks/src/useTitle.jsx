import { useEffect } from "react";

// custom hook oluşturuldu
const useTitle = (num) => {
  useEffect(() => {
    document.title = `sayı ${num}`;
  }, [num]);
};

export default useTitle;
