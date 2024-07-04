// rrd
import { Form, Link, useActionData } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebiseConfig";
//components
import { FormInput } from "../components";

//custom hooks
import { useLogin } from "../hooks/useLogin";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const [forgetPassword, setForgetPassword] = useState(true);
  const userData = useActionData();
  const { signInWithEmail, isPending } = useLogin();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(userData)
    if (userData) {
      if (userData?.email.trim() && userData.password?.trim()) {
        signInWithEmail(userData.email, userData.password);
      }

      if (!userData?.email.trim()) {
        setErrors((prev) => {
          return { ...prev, email: "input-error" };
        });
      }

      if (!userData?.password?.trim()) {
        setErrors((prev) => {
          return { ...prev, password: "input-error" };
        });
      }

      if (!forgetPassword && userData) {
        sendPasswordResetEmail(auth, userData.email.trim())
          .then(() => {
            toast.success("Send link")
            setForgetPassword(!forgetPassword)
          })
          .catch((error) => {
            const errorMessage = error.errormessage;
            toast.error(errorMessage)
          });
      }
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
          <FormInput
            type="email"
            name="email"
            labelText="email"
            status={errors.email}
          />
          {forgetPassword && (
            <FormInput
              type="password"
              name="password"
              labelText="password"
              status={errors.password}
            />
          )}

          <div className="w-full">
            {!isPending && (
              <button className="btn btn-primary btn-block">
                {forgetPassword ? "Login" : "Send Link"}
              </button>
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
          <div className="text-center ">
            <p>
              Forgot password ?{" "}
              <button
                onClick={() => setForgetPassword(!forgetPassword)}
                className="btn btn-link btn-sm"
              >
                Reset password
              </button>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
