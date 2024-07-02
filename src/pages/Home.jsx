import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import { Form } from "react-router-dom";
import { Checkbox, FormInput } from "../components";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data: todos } = useCollection("todos", ["uid", "==", user.uid]);
  return (
    <div className="align-elements">
      <div className="grid grid-cols-2">
        <div>
          {todos &&
            todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <h3 className="text-3xl">{todo.title}</h3>
                </div>
              );
            })}
        </div>
        <div className="pt-10">
          <Form
            method="post"
            className="flex flex-col items-center gap-5 card bg-base-100 w-96 p-5 shadow-xl"
          >
            <h1>Add New Todo</h1>
            <FormInput type="text" labelText="" />
            <Checkbox />
            <div className="w-full">
              <button className="btn btn-secondary btn-block">Add</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Home;
