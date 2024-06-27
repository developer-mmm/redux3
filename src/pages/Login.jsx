// rrd
import { Form, Link, useActionData } from "react-router-dom";

//components

import { FormInput } from "../components";

//custom hooks
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { signInWithEmail, isPending } = useLogin();

  useEffect(() => {
    if (userData) {
      signInWithEmail(userData);
    }
  }, [userData]);
  return (
    <div>
      <Form method="post">
        <h1>Login</h1>
        <FormInput type="email" name="email" labelText="email" />
        <FormInput type="password" name="password" labelText="password" />
      </Form>
    </div>
  );
}

export default Login;
