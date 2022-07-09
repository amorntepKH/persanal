import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logo from "./Logo";

function Header() {
  const Navigate = useNavigate();
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <div className="container-fluid bg-danger ">
      <nav className="navbar navbar-expand-sm navbar-light bg-danger shadow-sm py-0   ">
        <div className="container bg-danger">
          <Logo />
          {user ? (
            <div className="d-flex bg-danger justify-content-end align-items-center gap-3">
              {user?.role === "admin" ? (
                <>
                  <button
                    className="border-0 bg-danger text-center p-0"
                    onClick={() => Navigate("/admin")}
                  >
                    admin
                  </button>
                  <button
                    className="border-0 bg-danger text-center p-0"
                    onClick={() => Navigate("/product")}
                  >
                    products
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border-0 bg-danger text-center p-0"
                    onClick={() => Navigate("/product")}
                  >
                    products
                  </button>
                </>
              )}
              <button
                className="border-0 bg-danger text-center p-0"
                onClick={logout}
              >
                logout
              </button>
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
