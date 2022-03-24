import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import ITodo from "./types/todo";
import { v4 } from "uuid";
import Navbar from "./components/Navbar";

function App() {
  const [todos, setTodos] = React.useState<ITodo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [formInput, setFormInput] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <Navbar setCurrentUser={setCurrentUser} />
      {currentUser ? <p>Logged in as: {currentUser}</p> : <p>Not Logged In</p>}
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={(id: string) => {
              setTodos(todos.filter((todo) => todo.id !== id));
            }}
            canDelete={() => {
              return todo.author === currentUser;
            }}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!formInput) return;
          setTodos([
            ...todos,
            { text: formInput, author: currentUser, id: v4() },
          ]);
          setFormInput("");
        }}
      >
        <input
          type="text"
          className="input"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
