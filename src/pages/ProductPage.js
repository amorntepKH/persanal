import ProductCard from "../components/products/ProductCard";
import React from "react";

function ProductPage() {
  return (
    <div className="container">
      <div className="row row-cols-md-5 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductPage;
