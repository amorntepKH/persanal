import ProductCard from "../components/products/ProductCard";
import React from "react";
import { useProduct } from "../components/context/ProductContext";

function ProductPage() {
  const { product } = useProduct();
  console.log(product);
  return (
    <div className="container">
      <div className="row row-cols-md-5 gap-5">
        {product.map((el) => (
          <ProductCard
            key={el?.id}
            title={el?.name}
            src={el?.image}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
