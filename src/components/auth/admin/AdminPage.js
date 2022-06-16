import React from "react";
import logoregister from "../../../assets/images/logoregister.png";
function adminPage() {
  return (
    <div className=" container">
      <div className="row">
        <div className=" col ">
          <img src={logoregister} alt="" />
        </div>
        <div className="col ">
          <div className="register d-flex flex-column  py-5 ">
            <form className="boxregister container-fluid mt-4 ">
              {/*email*/}
              <div className="input-group px-3 p-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                />
              </div>
              {/*Password*/}
              <div className="input-group px-3 p-3 mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Model name"
                />
              </div>
              <div className=" d-flex justify-content-center ">
                <button className="btn btn-danger" type="submit">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminPage;
