import { useEffect, useState } from "react";
import { useAuth } from "../../components/context/AuthContext";
import logoregister from "../../assets/images/logoregister.png";
import axios from "../../config/axios";

function OrderUser({ cart }) {
  const { user } = useAuth();
  console.log(cart);

  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oldUser, setOldUser] = useState("");

  const totalPrice = cart.reduce((acc, el) => {
    acc += el.amount * el.Product.price;

    return acc;
  }, 0);

  const allOrderItem = cart.map((el) => ({
    amount: el.amount,
    productId: el.productId,
  }));

  const createOrder = async () => {
    try {
      await axios.post("/orders/create", {
        address,
        totalPrice,
        allOrderItem,
      });
      // navigate("/cartpage");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <div className="mb-3">
            <div className="register px-5">Boran Galleries Online Store</div>
            <p className="px-5 py-3">Delivery Address</p>
          </div>
          <div className="boxregister container-fluid   ">
            {/*First Name*/}
            <div className="input-group px-3 p-3 ">
              <input
                value={user.firstName}
                type="text"
                className="form-control"
                placeholder="First Name"
                disabled
              />
            </div>
            {/*Last Name*/}
            <div className="input-group px-3 p-3 ">
              <input
                value={user.lastName}
                type="text"
                className="form-control"
                placeholder="Last Name"
                disabled
              />
            </div>
            {/*address*/}
            <div className="input-group px-3 p-3 ">
              <input
                value={address}
                type="text"
                className="form-control"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className=" d-flex mt-3 px-5 p-3  ">
            <button className="btn btn-danger" onClick={createOrder}>
              Confirm
            </button>
          </div>
        </div>
        <div className="col border">
          <div className="row py-5 px-5 text-center">
            <div className="col  ">
              <p>Products</p>
            </div>
            <div className="col">
              <p>Price THB</p>
            </div>
          </div>

          <div className="row  px-5 text-center">
            <div className="col border-bottom ">
              {cart.map((el) => (
                <>
                  <p>{el.Product.name}</p>
                </>
              ))}
            </div>
            <div className="col border-bottom">
              {cart.map((el) => (
                <>
                  <p>{el.Product.price}</p>
                </>
              ))}
            </div>
          </div>
          <div className="row py-5 px-5 text-center">
            <div className="col ">
              <p>Total</p>
            </div>
            <div className="col ">
              <p>
                {totalPrice}
                THB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderUser;
