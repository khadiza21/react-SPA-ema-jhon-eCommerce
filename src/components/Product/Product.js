import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, img, price, seller, ratings } = props.product;
  return (
    <div className="product shadow position-relative">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p className="my-0 h6">Price: {price}</p>
        <p className="my-0 h6">Seller : {seller}</p>
        <p className="my-0 h6">
          <small>Ratings : {ratings} starts</small>
        </p>
      </div>
      <button className="btn h6 w-100 position-absolute bottom-0 py-3 fw-bold btn-cart mb-0  fs-6">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
