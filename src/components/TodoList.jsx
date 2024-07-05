import { useFirestore } from "../hooks/useFirestore";

function TodoList({ todos }) {
  const { deleteDocument, changeStatus } = useFirestore();
  return (
    <div>
      {todos &&
        todos.reverse().map((todo) => {
          return (
            <div
              key={todo.id}
              className={`flex g-4 items-center border-2 rounded-2xl w-96 justify-between p-5 shadow-xl mt-2 ${
                todo.completed ? "opacity-25" : "opacity-100"
              }`}
            >
              <h3 className="text-3xl">{todo.title}</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => changeStatus(todo.id, todo.completed)}
                  className="btn btn-secondary hover:text-green-400 btn-sm"
                >
                  {todo.completed ? "Uncompleted" : "Completed"}
                </button>
                <button
                  onClick={() => deleteDocument(todo.id)}
                  className="btn btn-primary hover:text-red-600 btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
