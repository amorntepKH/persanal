import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import AdminPage from "../auth/admin/AdminPage";
import LoginForm from "../auth/LoginForm";

import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "../auth/RegisterForm";
import ShowProduct from "../products/ShowProduct";

import CartListPage from "../../pages/CartListPage";
import AdminList from "../../pages/OrderList";
import OrderList from "../../pages/OrderList";
import OrderUser from "../../pages/Order/OrderUser";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="showproduct/:productId" element={<ShowProduct />} />
        <Route path="cartpage" element={<CartListPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="orderuser" element={<OrderUser />} />

        <Route path="admin/:productId" element={<AdminPage />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
