import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebiseConfig";

import { login } from "../app/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const signInWithEmail = async (email, password) => {
    setIsPending(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(login(user));
      toast.success("welcome back ");
      setIsPending(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
      setIsPending(false);
    }
  };
  return { signInWithEmail, isPending };
};

export { useLogin };
