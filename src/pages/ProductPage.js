import ProductCard from "../components/products/ProductCard";
import React, { useDebugValue } from "react";
import { useProduct } from "../components/context/ProductContext";
import axios from "../config/axios";

function ProductPage() {
  const { product, setFetch } = useProduct();
  console.log(product);

  // const name = "value";
  // const { value } = name;

  const handleDelete = (id) => {
    try {
      console.log(id);

      axios.delete(`/products/${id}`);
      console.log("remove");
      setFetch((p) => !p);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row row-cols-md-5 gap-5">
        {product.map((el) => (
          <ProductCard
            key={el?.id}
            title={el?.name}
            src={el?.image}
            price={el.price}
            onClick={() => handleDelete(el.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
