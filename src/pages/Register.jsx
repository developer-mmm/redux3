import { Form, Link, useActionData} from "react-router-dom";

import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";
import { FormInput } from "../components";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");

  return { email, password, displayName, photoURL };
};

function Register() {
  const userData = useActionData();
  const { registerWithEmail, isPending } = useRegister();

  useEffect(() => {
    if (userData) {
      registerWithEmail(userData);
    }
  }, [userData]);

  return (
    <Form method="post">
      <h1>Register</h1>
      <FormInput type="text" name="displayName" labelText="displayName" />
      <FormInput type="url" name="photoUrl" labelText="PhotoUrl" />
      <FormInput type="email" name="email" labelText="email" />
      <FormInput type="password" name="password" labelText="password" />
    </Form>
  );
}

export default Register;
