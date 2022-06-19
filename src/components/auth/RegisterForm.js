import logoregister from "../../assets/images/logoregister.png";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterForm() {
  const { signUp } = useAuth();
  const [firstName, setFirstNamne] = useState("");
  const [lastName, setLastNamne] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlesubmit = async () => {
    try {
      await signUp(firstName, lastName, email, password, confirmPassword);
      console.log("first");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(email);
  return (
    <div className="container">
      <div className="row">
        <div className="setimage col">
          <img src={logoregister} alt="" />
        </div>
        <div className="col ">
          <div className="register d-flex flex-column  py-5">
            <div className="mb-3">
              <div className=" px-5">Create your account</div>
            </div>
            <div className="boxregister container-fluid   ">
              {/*First Name*/}
              <div className="input-group px-3 p-3 ">
                <input
                  value={firstName}
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  onChange={(e) => setFirstNamne(e.target.value)}
                />
              </div>
              {/*Last Name*/}
              <div className="input-group px-3 p-3 ">
                <input
                  value={lastName}
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={(e) => setLastNamne(e.target.value)}
                />
              </div>
              {/*email*/}
              <div className="input-group px-3 p-3 ">
                <input
                  value={email}
                  type="text"
                  className="form-control"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/*Password*/}
              <div className="input-group px-3 p-3 ">
                <input
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/*Confirm Password*/}
              <div className="input-group px-3 p-3 ">
                <input
                  value={confirmPassword}
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className=" d-flex justify-content-center mt-3 ">
              <button className="btn btn-danger" onClick={handlesubmit}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
