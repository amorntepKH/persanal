import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/images/profileImg.png";
import { useAuth } from "../context/AuthContext";

function ProductCard({ src, title, price, onClick }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="container d-flex flex-center p-0">
      <div
        className="card mx-auto shadow-lg border-danger border-2 "
        style={{ width: "12rem" }}
        role="button"
      >
        <img src={src || profileImg} className="card-img-top" alt="..." />
        <div className="card-body text-center ">
          <h5 className="card-title text-center">{title}</h5>
          <h5 className="card-title text-center">{price}</h5>

          {user?.role === "admin" ? (
            <>
              <div className="row">
                <button
                  onClick={() => navigate("/showproduct")}
                  className="card-text col-10"
                >
                  Chose product
                </button>
                <button onClick={onClick} className="bi-trash card-text col-2">
                  D
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => navigate("/showproduct")}
              className="card-text"
            >
              Chose product
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
