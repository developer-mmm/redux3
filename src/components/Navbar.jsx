import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const { user } = useSelector((state) => state.user);
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
          <div className="flex">
            <h4 className="text-red-600 border-2 p-2 border-blue-400 rounded-full mr-4">{user.email}</h4>
            <img
              src={
                user.photoURL
                  ? user.photoURL
                  : `https://api.dicebear.com/9.x/initials/svg?seed=${user.photoURL}`
              }
              alt=""
            />
          </div>
          <button className="btn btn-secondary">EXIT</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
