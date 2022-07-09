import axios from "axios";
import React, { useEffect, useState } from "react";
import CartPage from "./Cart/CartPage";
import OrderUser from "./Order/OrderUser";

function CartListPage() {
  const [cart, setCart] = useState([]);
  const [change, setChange] = useState(false);
  const fetchCartById = async () => {
    try {
      const res = await axios.get("/carts");
      setCart(res.data.carts);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(cart);

  useEffect(() => {
    fetchCartById();
  }, []);

  return (
    <>
      {change ? (
        <OrderUser setChange={setChange} cart={cart} />
      ) : (
        <div className="container">
          <div className="row row-col gap-5">
            {cart?.map((el) => (
              <CartPage key={el.id} el={el} />
            ))}
          </div>
          <button
            className=" btn btn-danger text-center justify-items-conter"
            onClick={() => setChange(true)}
          >
            Check out
          </button>
        </div>
      )}
    </>
  );
}

export default CartListPage;
