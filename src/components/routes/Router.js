import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import LoginForm from "../auth/LoginForm";

import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "../auth/RegisterForm";
import SetPasswordForm from "../auth/SetPasswordForm";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/setpassword" element={<SetPasswordForm />} />
      </Route>
    </Routes>
  );
}

export default Router;
