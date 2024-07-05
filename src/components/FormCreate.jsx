import {FormInput, Checkbox} from "../components"
import { Form, useActionData} from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import { useEffect } from "react";

function FormCreate({user}) {
    const { addNewDoc } = useFirestore();
    const userData = useActionData();
    useEffect(() => {
      if (userData) {
        const NewDoc = {
          ...userData,
          completed: userData.completed == 'on' ?true : false,
          uid: user.uid,
        };
        addNewDoc(NewDoc);
      }
    }, [userData]);

  return (
    <Form
      method="post"
      className="flex flex-col items-center gap-5 card bg-base-100 w-96 p-5 shadow-xl"
    >
      <h1 className="text-2xl text-blue-400">Add New Todo</h1>
      <FormInput
        type="text"
        labelText="title"
        name="title"
      />
      <Checkbox name="completed" />
      <div className="w-full">
        <button className="btn btn-secondary btn-block">Add </button>
      </div>
    </Form>
  );
}

export default FormCreate;
