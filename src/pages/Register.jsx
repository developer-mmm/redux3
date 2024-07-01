import { Form, Link, useActionData } from "react-router-dom";

import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";
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
  const [errors, setErrors] = useState({
    email: "",
    displayName: "",
    photoURL: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      if (userData?.email.trim() && userData?.displayName.trim() && userData.photoURL.trim() && userData.password) {
        registerWithEmail(userData.email, userData.displayName, userData.photoURL, userData.password);
      }
      
      if (!userData?.email.trim()) {
        setErrors((prev) => {
          return {...prev, email: "input-error"}
        })
      }
      if (!userData?.displayName.trim()) {
        setErrors((prev) => {
          return {...prev, displayName: "input-error"}
        })
      }
      if (!userData?.photoURL.trim()) {
        setErrors((prev) => {
          return {...prev, photoURL: "input-error"}
        })
      }
      if (!userData?.password.trim()) {
        setErrors((prev) => {
          return {...prev, password: "input-error"}
        })
      }
    
      registerWithEmail(
        userData.email,
        userData.displayName,
        userData.photoURL,
        userData.password
      );
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
        <h1 className="text-4xl font-semibold">Register</h1>
        <FormInput  type="text" name="displayName" labelText="displayName" status={errors.displayName} />
        <FormInput type="url" name="photoURL" labelText="PhotoUrl" status={errors.photoURL} />
        <FormInput type="email" name="email" labelText="email" status={errors.email} />
        <FormInput type="password" name="password" labelText="password" status={errors.password} />
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
          Already registered ?{" "}
          <Link className="link-primary" to="/login">
            Login
          </Link>
        </div>
      </Form>
    </div>
    </div>
  );
}

export default Register;
