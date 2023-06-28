import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/shorts/footer/Footer";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import Settings from "./pages/settings/Settings";
import LoginTest from "./pages/LoginTest";
import SignUpTest from "./pages/SignUpTest";
import Cart from "./pages/cart/Cart.jsx";
import User from "./pages/user/User.jsx";
import ProductInfo from "./components/shorts/service/Service";
import LoginHome from "./pages/LoginHome/LoginHome";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logintest" element={<LoginTest />} />
        <Route path="/signuptest" element={<SignUpTest />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/productinfo" element={<ProductInfo />} />
        <Route path="/login-home" element={<LoginHome />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
