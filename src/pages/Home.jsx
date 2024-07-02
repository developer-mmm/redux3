import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import { Form, useActionData } from "react-router-dom";
import { Checkbox, FormInput } from "../components";
import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebiseConfig";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let completed = formData.get("completed");

  return { title, completed };
};

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data: todos } = useCollection("todos", ["uid", "==", user.uid]);
  const userData = useActionData();

  useEffect(() => {
    if(userData){
      const NewDoc = {
        ...userData,
        uid: user.uid,
      };
      addDoc(collection(db, "todos"), NewDoc)
    }
  }, [userData])
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
            <FormInput type="text" labelText="title" name="title" />
            <Checkbox name="completed" />
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
