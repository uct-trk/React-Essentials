import { useState, useTransition } from "react";

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [myList, setMyList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 2000; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Yükleniyor..."
        : myList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
};

export default UseTransition;

// useTransition, React'ta bir bileşenin montaj ve demontaj işlemlerinde animasyon kullanımını kolaylaştırmak için kullanılan bir hook'tur. Bu hook, bileşenlerin eklenmesi veya kaldırılması gibi değişiklikler sırasında animasyonlar eklemeyi kolaylaştırır.

// useTransition'ın bazı avantajları şunlardır:

// Bileşenlerin montaj ve demontaj işlemlerinde animasyonlar kullanmak kolaylaştırılır.

// Animasyonlar, bileşenin eklenmesi veya kaldırılması sırasında görünürlük ile ilgili sorunları ortadan kaldırmaya yardımcı olur.

// useTransition, animasyonların başlatılması ve bitirilmesi gibi ayrıntılarla uğraşmak yerine, animasyon işlemlerini otomatik olarak yönetir.
