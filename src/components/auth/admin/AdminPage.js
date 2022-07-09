import axios from "../../../config/axios";
import { useEffect, useRef, useState } from "react";
import logoregister from "../../../assets/images/logoregister.png";
import uploadImage from "../../../assets/images/uploadImage.png";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

function AdminPage() {
  const navigate = useNavigate();

  const imageRef = useRef(null);
  const { user } = useAuth();
  const { fetchProduct } = useProduct();
  const [productname, setProductName] = useState("");
  const [isInstock, setIsinStock] = useState("");
  const [price, setPrice] = useState("");
  const [imageproduct, setImageProduct] = useState(null);
  const [productById, setProductById] = useState([]);
  const { productId } = useParams();
  const [change, setChanged] = useState(false);

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
        const formData = new FormData();

        formData.append("productId", productId);
        formData.append("name", productname);
        formData.append("image", imageproduct);
        formData.append("price", price);
        formData.append("isInstock", isInstock);
        await axios.patch("/products/update", formData);

        navigate("/product");
        fetchProduct();
      }
    } catch (err) {
      console.log(err);
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

  const handleChangePhoto = (e) => {
    setChanged((p) => !p);
    setImageProduct(e.target.files[0]);
  };

  return (
    <div className=" container">
      <div className="row">
        <div className="col ">
          <div className="gap-5 px-3 p-3">
            <button className=" btn bg-danger mx-3">Create Products</button>
            <button
              className="btn bg-danger mx-3 "
              onClick={() => navigate("/orderlist")}
            >
              Order Lists
            </button>
          </div>
          <form className="boxregister container-fluid mt-4 ">
            {/*productname*/}
            <div className="input-group px-3 p-3">
              <input
                value={productname}
                type="text"
                className="form-control"
                placeholder="Product name"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            {/*Price*/}
            <div className="input-group px-3 p-3 ">
              <input
                value={price}
                type="text"
                className="form-control"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/*Stock*/}
            <div className="input-group px-3 p-3 ">
              <input
                value={isInstock}
                type="text"
                className="form-control"
                placeholder="isInstock"
                onChange={(e) => setIsinStock(e.target.value)}
              />
            </div>
          </form>
          <div className=" d-flex justify-content-center p-3 ">
            <button className="btn btn-danger" onClick={handlesubmit}>
              {productId ? "Update" : "Upload"}
            </button>
          </div>
        </div>
        <div className="setimage col d-flex justify-content-center align-items-center">
          <div className="border-radius-lg w-480px h-150px ">
            <img
              onClick={() => imageRef.current.click()}
              className="border-radius-lg w-100 h-100 object-cover"
              src={
                imageproduct
                  ? typeof imageproduct === "string"
                    ? imageproduct
                    : URL.createObjectURL(imageproduct)
                  : uploadImage
              }
              alt="imageproduct"
            />

            <input
              ref={imageRef}
              className="d-none"
              onChange={(e) => handleChangePhoto(e)}
              type="file"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
