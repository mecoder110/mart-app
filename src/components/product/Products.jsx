import { useEffect, useState } from "react";
import "./Products.css";
import { getProducts, categoryFilter } from "./Products.js";
import { Link } from "react-router-dom";

function Products() {
  const [productData, setProductData] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    getProducts(setProductData);
  }, []);

  return (
    <div>
      <section className="product-banner">
        <h1>Trending Electronic</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vero corrupti eius delectus odit facilis, atque
        </p>
      </section>
      <section className="product-category">
        <div
          onClick={() => {
            setActive("all");
            categoryFilter("", setProductData);
          }}
        >
          <img
            className={active === "all" ? "active" : "inactive"}
            src="https://images.unsplash.com/photo-1600947744579-04d6b59bb911?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFsbCUyMGl0ZW1zfGVufDB8fDB8fHww"
            alt=""
          />
          <h3>All-Items</h3>
        </div>
        <div
          onClick={() => {
            categoryFilter("electronics", setProductData);
            setActive("electronics");
          }}
        >
          <img
            className={active == "electronics" ? "active" : "inactive"}
            src="https://media.istockphoto.com/id/1472421626/photo/3d-rendering-of-wireless-headphones-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OQwzpKJLs-82MoYwYViaHPFGh9jOSGbPlgFM77uJ5Fs="
            alt=""
          />
          <h3>Electronics</h3>
        </div>
        <div
          onClick={() => {
            setActive("men's clothing");
            categoryFilter("men's clothing", setProductData);
          }}
        >
          <img
            className={active === "men's clothing" ? "active" : "inactive"}
            src="https://plus.unsplash.com/premium_photo-1675080431459-92373a9efd84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMHdlYXJzfGVufDB8fDB8fHww"
            alt=""
          />
          <h3>Men's clothing</h3>
        </div>
        <div
          onClick={() => {
            setActive("women's clothing");
            categoryFilter("women's clothing", setProductData);
          }}
        >
          <img
            className={active === "women's clothing" ? "active" : "inactive"}
            src="https://images.unsplash.com/photo-1631695117568-c56a4e039ac4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Women's clothing</h3>
        </div>
        <div
          onClick={() => {
            setActive("jewelery");
            categoryFilter("jewelery", setProductData);
          }}
        >
          <img
            className={active === "jewelery" ? "active" : "inactive"}
            src="https://media.istockphoto.com/id/486592734/photo/indian-jewellery.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZAW-Odr2VL_twVpqMQplcpGqKmKqIwM-sw_V9zvqYvk="
            alt=""
          />
          <h3>Jewelery</h3>
        </div>
      </section>
      <section className="product-data">
        {productData.map((product) => {
          return (
            <div className="card">
              <img src={product.image} alt="" />

              <h3>{product.title}</h3>

              <p>$ {product.price}</p>
              <h4>{product.category}</h4>
              <Link to={`/product-details/${product.id}`}>
                <button>Product Details</button>
              </Link>

              <button>Add Cart</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Products;
