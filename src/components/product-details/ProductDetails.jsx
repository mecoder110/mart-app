import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { productDetails } from "./ProductDetails";

function ProductDetails() {
  const [productDetail, setProductDetail] = useState("");
  const { id } = useParams();
  useEffect(() => {
    productDetails(id, setProductDetail);
  }, []);
  return (
    <div className="product-detail">
      <img src={productDetail.image} alt="" />
      <h1>Product Details: {productDetail.description}</h1>
    </div>
  );
}

export default ProductDetails;
