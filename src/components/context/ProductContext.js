import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [fetch, setFetch] = useState(false);

  const fetchProduct = async () => {
    const res = await axios.get("/products");
    setProduct(res.data.products);
  };
  useEffect(() => {
    fetchProduct();
  }, [fetch]);

  return (
    <ProductContext.Provider value={{ product, setFetch, fetchProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export default ProductContextProvider;

export { useProduct };
