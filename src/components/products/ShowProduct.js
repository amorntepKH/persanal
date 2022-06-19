import imgproduct from "../../assets/images/imgproduct.png";
import React from "react";

function ShowProduct() {
  return (
    <div className="container d-flex align-items-center gap-3">
      <div className="w-50">
        <div className="">
          <img src={imgproduct} className="d-block w-100 " alt="..." />
        </div>
      </div>

      <div className="w-50 ">
        <div className="container-fluid mt-4 text-center fs-3 ">
          {/*model of product*/}
          <div className=" px-3 p-0 mb-3">
            <p>Pentax PC 35AF-M</p>
          </div>
          {/*price*/}
          <div className="px-3 p-0 mb-3">
            <p>2550 THB</p>
          </div>

          <div className=" d-flex justify-content-center p-3 mb-3">
            <div
              className="btn-group "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger border">
                -
              </button>
              <button type="button" className="btn btn-danger border">
                count
              </button>
              <button type="button" className="btn btn-danger border">
                +
              </button>
            </div>
          </div>

          {/*price*/}
          <div className="px-3 p-0 mb-3 fs-6">
            <p>Quantity</p>
          </div>

          <div className="justify-content-center px-3 p-3 mb-3 ">
            <a href="#" className="btn btn-danger" alt="">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
