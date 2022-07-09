import axios from "../config/axios";
import { useEffect, useRef, useState } from "react";
import logoregister from "../assets/images/logoregister.png";

import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../components/context/AuthContext";
import { useProduct } from "../components/context/ProductContext";

function OrderList() {
  const navigate = useNavigate();

  const imageRef = useRef();
  const { user } = useAuth();
  const { fetchProduct } = useProduct();
  const [productname, setProductName] = useState("");
  const [isInstock, setIsinStock] = useState("");
  const [price, setPrice] = useState("");
  const [imageproduct, setImageProduct] = useState(null);
  const [productById, setProductById] = useState([]);
  const { productId } = useParams();

  const handlesubmit = async (e) => {
    try {
      if (!productId) {
        const formData = new FormData();
        formData.append("name", productname);
        formData.append("image", imageproduct);
        formData.append("price", price);
        formData.append("isInstock", isInstock);
        const res = await axios.post("/products", formData);

        navigate("/product");
        fetchProduct();
        return res.data;
      } else {
        await axios.patch("/products/update", {
          name: productname,
          price,
          isInstock,
          productId,
        });

        navigate("/product");
        fetchProduct();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProductById = async () => {
    try {
      const res = await axios.get("/products/" + productId);

      setProductById(res.data.product);

      setProductName(res.data.product.name);
      setPrice(res.data.product.price);
      setIsinStock(res.data.product.isInstock);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productId && fetchProductById();
  }, []);

  return (
    <div className=" container">
      <div className="row">
        <div className="col">
          <div className="gap-5 px-3 p-3">
            <button
              className=" btn bg-danger mx-3"
              onClick={() => navigate("/admin")}
            >
              Update Products
            </button>
            <button className="btn bg-danger mx-3">Order Lists</button>
          </div>
          <div className="w-50 border-bottom pb-3">
            <form className="boxregister container-fluid mt-4 ">
              {/*productname*/}
              <div className="input-group px-3 p-3">
                <input
                  value={productname}
                  type="text"
                  className="form-control"
                  placeholder="User name"
                  // onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              {/*productname*/}
              <div className="input-group px-3 p-3">
                <input
                  value={productname}
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  // onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              {/*amount order*/}
              <div className="input-group px-3 p-3 ">
                <input
                  value={isInstock}
                  type="text"
                  className="form-control"
                  placeholder="Amount"
                  // onChange={(e) => setIsinStock(e.target.value)}
                />
              </div>

              {/*Address*/}
              <div className="input-group px-3 p-3">
                <input
                  value={price}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  // onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              {/*Phone number*/}
              <div className="input-group px-3 p-3">
                <input
                  value={price}
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  // onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
