import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <div className="container-fluid bg-danger ">
      <nav className="navbar navbar-expand-sm navbar-light bg-danger shadow-sm py-0  ">
        <div className="container bg-danger">
          <Logo />
          <div class="d-flex justify-content-end align-items-center">
            <Link className="p-3 bg-danger text-dark" to="register">
              Sign Up
            </Link>
            <Link className="p-3 bg-danger text-dark " to="login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
