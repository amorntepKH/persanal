import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logo from "./Logo";

function Header() {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="container-fluid bg-danger">
      <nav className="navbar navbar-expand-sm navbar-light bg-danger shadow-sm py-0   ">
        <div className="container bg-danger">
          <Logo />
          {user ? (
            <div className="d-flex justify-content-end align-items-center">
              <button onClick={logout}>logout</button>
            </div>
          ) : (
            <div className="d-flex justify-content-end align-items-center">
              <Link
                className="p-3 bg-danger text-dark text-reset "
                to="register"
              >
                Sign Up
              </Link>
              <Link className="p-3 bg-danger text-dark " to="login">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
