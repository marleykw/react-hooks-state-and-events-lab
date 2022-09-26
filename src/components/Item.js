import React, { useState } from "react";

function Item({ name, category }) {
  //console.log(category)

  let [cartStatus, setCartStatus] =  useState(true)

  function handleClick() {
    setCartStatus((cartStatus) => !cartStatus)
  }

  const cartToggle = cartStatus ? "" : "in-cart";
  const cartToggleLbl = cartStatus ? "Add to Cart" : "Remove From Cart";
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={cartToggle}>{cartToggleLbl}</button>
    </li>
  );
}

export default Item;
