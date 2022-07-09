import imgproduct from "../../assets/images/imgproduct.png";
import React, { useState } from "react";

function CartPage({ el }) {
  const [count, setCount] = useState(el.amount);

  console.log(el?.Product?.price);

  // <p>{+el?.Product?.price * +el.amount}</p>

  return (
    <div className="container d-flex justify-content-center gap-5">
      <img src={imgproduct} className="w-25  " alt="..." />

      <div className="">
        <div className="container mt-2 text-center fs-3 ">
          {/*model of product*/}

          <p>{el?.Product?.name}</p>

          {/*price*/}

          <p>{el?.Product?.price} THB</p>

          {/*price*/}
          <div className="px-3 p-0 fs-6">
            <button
              type="button"
              className="btn btn-danger border"
              onClick={() => setCount((p) => (p > 1 ? p - 1 : p))}
            >
              -
            </button>
            <button type="button" className="btn btn-danger border">
              {count}
            </button>
            <button
              type="button"
              className="btn btn-danger border"
              onClick={() => setCount((p) => p + 1)}
            >
              +
            </button>
          </div>
          <button className="btn btn-danger">Update</button>
        </div>
      </div>
      <div className=" d-flex align-items-center px-5">
        {el?.Product ? <p>{+el?.Product?.price * +el.amount}</p> : null}
      </div>
    </div>
  );
}

export default CartPage;
