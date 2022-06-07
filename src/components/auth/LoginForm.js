import logoregister from "../../assets/images/logoregister.png";
import React from "react";

function LoginForm() {
  return (
    <div className=" container">
      <div className="row">
        <div className="setimage col ">
          <img src={logoregister} />
        </div>
        <div className="col ">
          <div className="register d-flex flex-column  py-5">
            <div className="mb-3">
              <div className=" px-5">Login</div>
            </div>
            <div className="boxregister container-fluid mt-4 ">
              {/*First Name*/}

              <div class="input-group px-3 p-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              {/*Last Name*/}
              <div class="input-group px-3 p-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className=" d-flex justify-content-center ">
              <button type="button" class="btn btn-danger">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
