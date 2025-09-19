import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({setIsLogin}) {
  return (
    <div className="nav">
      <div id="brand">
        <h1>24/7s Mart</h1>
      </div>
      <div id="links">
        <Link  to="/">Home</Link >
        <Link  to="/products">Products</Link >
        <Link  to="/profile">Profile</Link >
        <Link  to="/contact-us">ContactUs</Link >
      </div>
      <div id="icons">
        <i style={{ fontSize: "27px" }} className="bi bi-bag-check"></i>
        <i style={{ fontSize: "27px" }} className="bi bi-suit-heart-fill"></i>

        <button type="button" onClick={()=>setIsLogin(false)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
