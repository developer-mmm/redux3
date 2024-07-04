import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../app/userSlice";
//firebase;
import { auth } from "../firebase/firebiseConfig";
import { signOut } from "firebase/auth";
//toast
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleoOut = async () => {
    try {
      await signOut(auth);
      toast.success(" see you soon ✋");
      dispatch(logout());
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <header className="bg-base-200 ">
      <nav className="navbar align-elements">
        <div className="navbar-start">
          <img
            className="w-20 h-20"
            src="../public/reshot-icon-progress-JEANMZ3WU4.svg"
            alt=""
          />
        </div>
        <div className="gap-6">
          <div className="navbar-center">
            <Link className="hover:text-purple-600">Home</Link>{" "}
          </div>
          <div className="navbar-center">
            <Link className="hover:text-purple-600">About</Link>
          </div>
          <div className="navbar-center">
            <Link className="hover:text-purple-600">Contact</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <h4 className="text-blue-600  border-2 p-2 border-blue-400 rounded-full mr-4">
              {user.displayName}
            </h4>
            <div className="avatar">
              <div className="ring-primary mr-4 ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
                <img
                  src={
                    user.displayName
                      ? user.photoURL
                      : `https://api.dicebear.com/9.x/initials/svg?seed=${user.photoURL}`
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <button onClick={handleoOut} className="btn btn-secondary">
            EXIT
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
