import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/images/profileImg.png";
import ShowProduct from "./ShowProduct";

function ProductCard() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        className="card mx-auto shadow-lg border-danger border-2"
        style={{ width: "12rem" }}
        role="button"
        onClick={() => navigate("/showproduct")}
      >
        <img src={profileImg} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text text-center">Some quick</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
