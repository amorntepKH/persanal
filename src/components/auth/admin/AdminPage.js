import { useRef } from "react";
import logoregister from "../../../assets/images/logoregister.png";

function AdminPage() {
  const imageRef = useRef();

  return (
    <div className=" container">
      <div className=" container"></div>
      <div className="row">
        <div className="setimage col ">
          <img src={logoregister} alt="" />
        </div>
        <div className="col ">
          <div className="register d-flex flex-column  py-3 ">
            <form className="boxregister container-fluid mt-4 ">
              {/*productname*/}
              <div className="input-group px-3 p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                />
              </div>
              {/*model*/}
              <div className="px-3 p-0">
                {/* <label htmlFor="myfile">Select files:</label> */}
                {/* <input type="file" id="myfile" name="myfile" multiple /> */}
                <button
                  className="btn btn-danger w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    imageRef.current.click();
                    console.log("ref", imageRef.current);
                  }}
                >
                  upload
                </button>
                <input type="file" className="d-none " ref={imageRef} />
              </div>
              {/*model*/}
              <div className="input-group px-3 p-3 mt-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Price"
                />
              </div>
              <div className="input-group px-3 p-3 ">
                <input
                  type="password"
                  className="form-control"
                  placeholder="isInstock"
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

export default AdminPage;
