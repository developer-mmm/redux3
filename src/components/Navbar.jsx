import React from "react";
// redux
import { useSelector } from "react-redux";

//firebase;
import { auth } from "../firebase/firebiseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const handleoOut = async () => {
    try {
      await signOut(auth);
      toast.success("back again ✋");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <header className="bg-base-200">
      <nav className="navbar align-elements">
        <div className="navbar-start">
          <button className="btn btn-primary text-2xl font-bold font-mono text-green-400">
            Logo
          </button>
        </div>
        <div className="navbar-center">contact</div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <h4 className="text-red-600  border-2 p-2 border-blue-400 rounded-full mr-4">
              {user.email}
            </h4>
            <div className="avatar">
            <div className="ring-primary mr-4 ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
            <img
              src={
                user.displayName
                  ? user.photoURL
                  : `https://api.dicebear.com/9.x/initials/svg?seed=${user.displayName}`
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
