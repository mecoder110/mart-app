import Navbar from "./components/header/Navbar.jsx";
import Products from "./components/product/Products.jsx";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile.jsx";
import Contactus from "./components/contact-us/Contactus.jsx";
import ProductDetails from "./components/product-details/ProductDetails.jsx";
import Signin from "./components/sign-in/Signin.jsx";
import { useState } from "react";
import Container from "./components/container/Container.jsx";
import { myContext } from "./components/contaxt-api/Context.js";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  function login() {
    setIsLogin(true);
  }
  function logout() {
    setIsLogin(false);
  }

  return (
    <div id="app">
      <myContext.Provider value={{ isLogin, login, logout }}>
        {isLogin ? <Navbar /> : null}
        <Container></Container>
      </myContext.Provider>
    </div>
  );
}

export default App;
