import logoHomepage from "././../assets/images/logoHomepage.png";
import React from "react";
import ProductCard from "../components/products/ProductCard";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../components/context/ProductContext";

function HomePage() {
  const Navigate = useNavigate();
  const { product } = useProduct();
  return (
    <>
      <div className="container">
        <div className="container-fluid text-center">
          <img src={logoHomepage} alt="" width="100%"></img>
        </div>
      </div>
      <div
        className="d-flex"
        role="button"
        onClick={() => Navigate("/product")}
      >
        {product.map((el, idx) => {
          if (idx < 3) {
            return (
              <ProductCard
                key={el?.id}
                title={el?.name}
                src={el?.image}
                price={el.price}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default HomePage;
