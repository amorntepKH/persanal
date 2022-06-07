import logoregister from "../../assets/images/logoregister.png";
import React from "react";
import { Link, Navigate } from "react-router-dom";

function RegisterForm() {
  return (
    <div className=" container">
      <div className="row">
        <div className="setimage col  ">
          <img src={logoregister} />
        </div>
        <div className="col ">
          <div className="register d-flex flex-column  py-5">
            <div className="mb-3">
              <div className=" px-5">Create your account</div>
            </div>
            <div className="boxregister container-fluid mt-4 ">
              {/*First Name*/}

              <div class="input-group px-3 p-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              {/*Last Name*/}
              <div class="input-group px-3 p-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
              {/*Address*/}
              <div class="input-group px-3 p-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              {/*Phone Number*/}
              <div class="input-group px-3 p-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className=" d-flex justify-content-center ">
              <a href="setpassword" class="btn btn-danger stretched-link">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
