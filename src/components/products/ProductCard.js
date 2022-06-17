import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/images/profileImg.png";

function ProductCard({ src, title, price, onClick }) {
  const navigate = useNavigate();
  return (
    <div className="container d-flex flex-center p-0">
      <div
        className="card mx-auto shadow-lg border-danger border-2 "
        style={{ width: "12rem" }}
        role="button"
        onClick={() => navigate("/showproduct")}
      >
        <img src={src || profileImg} className="card-img-top" alt="..." />
        <div className="card-body text-center ">
          <h5 className="card-title text-center">{title}</h5>
          <h5 className="card-title text-center">{price}</h5>

          <button onClick={onClick} className="card-text">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
