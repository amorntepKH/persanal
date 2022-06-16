import logoregister from "../../assets/images/logoregister.png";
import React, { useState, useEffect } from "react";
import axios from "../../config/axios";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <div className=" container">
      <div className="row">
        <div className="setimage col ">
          <img src={logoregister} alt="" />
        </div>
        <div className="col ">
          <div className="register d-flex flex-column  py-5 ">
            <div className="mb-3">
              <div className=" px-5">Login</div>
            </div>
            <form
              onSubmit={handlesubmit}
              className="boxregister container-fluid mt-4 "
            >
              {/*email*/}
              <div className="input-group px-3 p-3 mb-3">
                <input
                  value={email}
                  type="text"
                  className="form-control"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/*Password*/}
              <div className="input-group px-3 p-3 mb-3">
                <input
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" d-flex justify-content-center ">
                <button className="btn btn-danger" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
