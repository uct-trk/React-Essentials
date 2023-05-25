import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
function App(): React.ReactNode {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const [todo, setTodo] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        { id: Date.now() as number, todo: todo, isDone: false },
      ]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Yapılacaklar</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
