import Navbar from "./components/header/Navbar.jsx";
import Products from "./components/product/Products.jsx";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile.jsx";
import Contactus from "./components/contact-us/Contactus.jsx";
import ProductDetails from "./components/product-details/ProductDetails.jsx";
import Signin from "./components/sign-in/Signin.jsx";
import { useState } from "react";
import Container from "./components/container/Container.jsx";

function App() {
 const [isLogin, setIsLogin]= useState(false)
  return (
    <div id="app">
      {isLogin ? <Navbar setIsLogin={setIsLogin}/> : null}
      <Container isLogin={isLogin} setIsLogin={setIsLogin}></Container>
     
      {/* <Routes>
        <Route path={"/"} element={<Products />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
        <Route path={"/profile"} element={<Profile />}></Route>
        <Route path={"/contact-us"} element={<Contactus />}></Route>
        <Route
          path={"/product-details/:id"}
          element={<ProductDetails />}
        ></Route>
      </Routes> */}
    </div>
  );
}

export default App;
