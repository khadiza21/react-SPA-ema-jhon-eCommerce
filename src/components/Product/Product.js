import React from "react";
import "./Product.css";
const Product = (props) => {
  
  const { name, img, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h5 className="product-name">{name}</h5>
    </div>
  );
};

export default Product;
