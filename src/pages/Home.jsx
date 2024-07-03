import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import { Form, useActionData } from "react-router-dom";
import { Checkbox, FormInput } from "../components";
import { useEffect } from "react";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
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

  const deleteDocument = (id) => {
    deleteDoc(doc(db, "todos", id))
  }
  return (
    <div className="align-elements ">
      <div className="grid grid-cols-2 ">
        <div>
          {todos &&
            todos.map((todo) => {
              return (
                <div key={todo.id} className="flex g-4 items-center border-2 rounded-2xl w-96 justify-between p-5 mt-2">
                  <h3 className="text-3xl">{todo.title}</h3>
                  <button onClick={() => deleteDocument(todo.id)} className="btn btn-primary btn-sm">Delete</button>
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
