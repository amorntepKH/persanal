import ProductCard from "../components/products/ProductCard";
import React, { useDebugValue, useEffect, useState } from "react";
import { useProduct } from "../components/context/ProductContext";
import axios from "../config/axios";

function ProductPage() {
  const { product, setFetch } = useProduct();
  const { fetchProduct } = useProduct();
  const [orderItems, setOrderItems] = useState();

  // const name = "value";
  // const { value } = name;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
      console.log("remove");
      setFetch((p) => !p);
      fetchProduct();
    } catch (error) {
      if (
        error.response.data.message ===
        "Cannot delete or update a parent row: a foreign key constraint fails (`personal`.`orderitems`, CONSTRAINT `orderitems_ibfk_4` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT)"
      ) {
        alert("Canont delete already buy products");
      }
    }
  };
  // console.log(productIdArr);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("/orders/all/order-item");
      // console.log(res);
      setOrderItems(res.data.orderItem);
    };
    fetch();
  }, []);
  console.log(product);
  console.log(orderItems);
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
            id={el.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
