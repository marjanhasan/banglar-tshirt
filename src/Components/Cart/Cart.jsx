import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h1>order summary: {cart.length}</h1>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
