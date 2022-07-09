import imgproduct from "../../assets/images/imgproduct.png";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "../../config/axios";

function ShowProduct() {
  const navigate = useNavigate();
  const [productById, setProductById] = useState([]);
  const [productname, setProductName] = useState("");
  const [isInstock, setIsinStock] = useState("");
  const [price, setPrice] = useState("");
  const [imageproduct, setImageProduct] = useState(null);
  const { productId } = useParams();
  const [count, setCount] = useState(1);

  const handleAddtoCart = async () => {
    try {
      await axios.post("/carts/create", { amount: count, productId });
      navigate("/cartpage");
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchProductById = async () => {
    try {
      if (productId) {
        const res = await axios.get("/products/" + productId);
        setProductById(res.data.product);
        setProductName(res.data.product.name);
        setPrice(res.data.product.price);
        setIsinStock(res.data.product.isInstock);
        setImageProduct(res.data.product.image);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productId && fetchProductById();
  }, []);

  return (
    <div className="container d-flex align-items-center gap-3">
      <div className="w-50">
        <div className="">
          <img src={imageproduct} className="d-block w-100 " alt="..." />
        </div>
      </div>

      <div className="w-50 ">
        <div className="container-fluid mt-4 text-center fs-3 ">
          {/*model of product*/}
          <div className=" px-3 p-0 mb-3">{productname}</div>
          {/*price*/}
          <div className="px-3 p-0 mb-3">{price}</div>

          <div className=" d-flex justify-content-center p-3 mb-3">
            <div
              className="btn-group "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-danger border"
                onClick={() => setCount((p) => (p > 1 ? p - 1 : p))}
              >
                -
              </button>
              <button type="button" className="btn btn-danger border">
                {count}
              </button>
              <button
                type="button"
                className="btn btn-danger border"
                onClick={() => setCount((p) => p + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="justify-content-center px-3 p-3 mb-3 ">
            <button className="btn btn-danger" onClick={handleAddtoCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
