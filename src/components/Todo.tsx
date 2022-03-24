import ITodo from "../types/todo";

interface TodoProps {
  todo: ITodo;
  removeTodo: (id: string) => void;
  canDelete: () => boolean;
}

function Todo({ todo, removeTodo, canDelete }: TodoProps) {
  const { text, author, id } = todo;
  return (
    <div className="todo">
      {text} / {author}{" "}
      <div>
        <button onClick={() => removeTodo(id)} disabled={!canDelete()}>
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;
