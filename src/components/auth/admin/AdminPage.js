import axios from "../../../config/axios";
import { useRef, useState } from "react";
import logoregister from "../../../assets/images/logoregister.png";
import { useAuth } from "../../context/AuthContext";

function AdminPage() {
  const imageRef = useRef();
  const { user } = useAuth();
  const [productname, setProductName] = useState("");
  const [isInstock, setIsinStock] = useState("");
  const [price, setPrice] = useState("");
  const [imageproduct, setImageProduct] = useState(null);

  const handlesubmit = async (e) => {
    try {
      console.log("first");
      const formData = new FormData();
      formData.append("name", productname);
      formData.append("image", imageproduct);
      formData.append("price", price);
      formData.append("isInstock", isInstock);
      const res = await axios.post("/products", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" container">
      <div className=" container"></div>
      <div className="row">
        <div className="setimage col ">
          <img src={logoregister} alt="" />
        </div>
        <div className="col ">
          <div className="register d-flex flex-column  py-3 ">
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
              <div className="input-group px-3 p-3 mt-3">
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
              {/*Image*/}
              <div className="px-3 p-0 w-80">
                <input
                  onChange={(e) => setImageProduct(e.target.files[0])}
                  type="file"
                  className="text-small "
                />
              </div>
            </form>
            <div className=" d-flex justify-content-center p-3 ">
              <button className="btn btn-danger" onClick={handlesubmit}>
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
