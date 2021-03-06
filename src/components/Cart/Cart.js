import React from "react";

import Product from "../Product/Product";

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce(
    (total, prod) => total + prod.price * prod.quantity,
    0
  );

  //   let totalPrice = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const product = cart[i];
  //     totalPrice = totalPrice + product.price;
  //   }

  let shipping = 0;
  if (totalPrice > 50) {
    shipping = 0;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  } else if (totalPrice > 20) {
    shipping = 4.99;
  }
  const tax = totalPrice / 10;
  const grandTotal = totalPrice + shipping + tax;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered : {cart.length}</p>
      <p>Product Price: {formatNumber(totalPrice)}</p>
      <p>
        <small>Shipping Cost : {shipping} </small>
      </p>
      <p>
        <small>Tax + VAT : {tax}</small>
      </p>
      <p>Total Price : {formatNumber(grandTotal)}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
