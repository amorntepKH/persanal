import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import AdminPage from "../auth/admin/AdminPage";
import LoginForm from "../auth/LoginForm";

import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "../auth/RegisterForm";
import ShowProduct from "../products/ShowProduct";
import CartPage from "../../pages/Cart/CartPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="showproduct" element={<ShowProduct />} />
        <Route path="cartpage" element={<CartPage />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
