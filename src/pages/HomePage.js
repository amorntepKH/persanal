import logoHomepage from "././../assets/images/logoHomepage.png";
import React from "react";
import ProductCard from "../components/products/ProductCard";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../components/context/ProductContext";
import { useAuth } from "../components/context/AuthContext";

function HomePage() {
  const Navigate = useNavigate();
  const { product } = useProduct();
  const { user } = useAuth();
  return (
    <div className="container">
      <div className="container-fluid text-center">
        <img src={logoHomepage} alt="" width="100%"></img>
      </div>

      {user?.role === "client" || "admin" ? (
        <>
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
      ) : (
        <div
          className="d-flex"
          role="button"
          onClick={() => Navigate("/login")}
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
      )}
    </div>
  );
}

export default HomePage;
