import { Route, Routes } from "react-router-dom";

import Signin from "../sign-in/Signin";
import Home from "../home/Home";
import Products from "../product/Products.jsx";
import Profile from "../profile/Profile";
import Contactus from "../contact-us/Contactus";
import ProductDetails from "../product-details/ProductDetails.jsx";
import { useContext } from "react";
import { myContext } from "../contaxt-api/Context.js";

function Container() {
  var component = null;
  const {isLogin} = useContext(myContext);

  if (isLogin) {
    component = (
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
        <Route path={"/profile"} element={<Profile />}></Route>
        <Route path={"/contact-us"} element={<Contactus />}></Route>
        <Route
          path={"/product-details/:id"}
          element={<ProductDetails />}
        ></Route>
      </Routes>
    );
  } else {
    component = <Signin></Signin>;
  }
  return <div>{component}</div>;
}

export default Container;
