import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let Shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    Shipping = Shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + Shipping + tax;
  return (
    <div className="cart ">
      <h3 className="fw-bold">Order Summary</h3>
      <p className="fs-5">Selected Items: {cart.length}</p>
      <p className="fs-5">Total Price: ${total}</p>
      <p className="fs-5">Total Shipping: ${Shipping}</p>
      <p className="fs-5">Tax : ${tax}</p>
      <h4 className="fs-5">Grand Total : {grandTotal}</h4>
    </div>
  );
};

export default Cart;
