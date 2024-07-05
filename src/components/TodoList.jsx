import { useFirestore } from "../hooks/useFirestore";

function TodoList({ todos }) {
  const { deleteDocument, changeStatus } = useFirestore();
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

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
              <button
                className="btn btn-outline ml-2 mr-2 btn-sm"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Change modal
              </button>
              <div className="flex flex-wrap-reverse ">
                <button
                  onClick={() => changeStatus(todo.id, todo.completed)}
                  className="btn btn-block mt-2 btn-secondary hover:text-green-400 btn-sm"
                >
                  {todo.completed ? "Uncompleted" : "Completed"}
                </button>
                <button
                  onClick={() => deleteDocument(todo.id)}
                  className="btn  ml-8  btn-primary hover:text-red-600 btn-sm"
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
