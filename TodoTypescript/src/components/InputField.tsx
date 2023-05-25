import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  // entera bastığımız zaman box shadow gitmiyordu useRef ile çözüldü
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        ref.current?.blur();
      }}
    >
      <input
        ref={ref}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Görev Giriniz"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
