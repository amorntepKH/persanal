import imgproduct from "../../assets/images/imgproduct.png";
import React from "react";

function CartPage() {
  return (
    <div className="container d-flex justify-content-between  ">
      <img
        src={imgproduct}
        className="d-block w-25 justify-content-center "
        alt="..."
      />
      <div className="">
        <div className="container mt-4 text-center fs-3 ">
          {/*model of product*/}
          <div className=" px-3 p-0 mb-3">
            <p>Pentax PC 35AF-M</p>
          </div>

          {/*price*/}
          <div className="px-3 p-0 ">
            <p>2550 THB</p>
          </div>

          <div className="px-3 p-0">
            <p>total</p>
          </div>

          {/*price*/}
          <div className="px-3 p-0 fs-6">
            <p>Quantity</p>
          </div>
        </div>
      </div>
      <div className=" d-flex align-items-center px-5">
        <p>total</p>
      </div>
    </div>
  );
}

export default CartPage;
