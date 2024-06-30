// rrd
import { Form, Link, useActionData } from "react-router-dom";

//components

import { FormInput } from "../components";

//custom hooks
import { useLogin } from "../hooks/useLogin";
import { useEffect, useState } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { signInWithEmail, isPending } = useLogin();
  // const [errors, setErrors] = useState({
  //   email: "",
  //   password: "",
  // });

  useEffect(() => {
    if (userData) {
      signInWithEmail(userData.email, userData.password);
    }


  }, [userData]);
  return (
    <div className="auth-container">
      <div className="auth-left"></div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col items-center gap-5 card bg-base-100 w-96 p-5 shadow-xl"
        >
          <h1 className="text-4xl font-semibold">Login</h1>
          <FormInput type="email" name="email" labelText="email" />
          <FormInput type="password" name="password" labelText="password"  />

          <div className="w-full">
            {!isPending && (
              <button className="btn btn-primary btn-block">Pass</button>
            )}
            {isPending && (
              <button disabled className="btn btn-primary btn-block">
                Loading...
              </button>
            )}
          </div>
          <div className="text-center">
            do you not have any account yet ?{" "}
            <Link className="link-primary" to="/register">
              Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
