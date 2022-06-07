import React from "react";
import logo from "../../../assets/images/logo.png";

function Logo() {
  return (
    <div>
      <nav className="navbar bg-danger">
        <div className="container bg-danger">
          <a className="navbar bg-danger" href="home">
            <img
              className="bg-danger"
              src={logo}
              alt=""
              width="100%"
              height="100PX"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Logo;
