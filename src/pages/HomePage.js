import logoHomepage from "././../assets/images/logoHomepage.png";
import React from "react";
import ProductCard from "../components/products/ProductCard";
import { useNavigate } from "react-router-dom";

function HomePage() {
  // const Navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="container-fluid text-center">
          <img src={logoHomepage} alt="" width="100%"></img>
        </div>
      </div>
      <div className="d-flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default HomePage;
