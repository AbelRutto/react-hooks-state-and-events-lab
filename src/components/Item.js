import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const cartClass = inCart ? "in-cart" : "";
  const buttonClass = inCart ? "remove" : "add";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  function handleClick() {
    setInCart((inCart) => !inCart);
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick} >{buttonText}</button>
    </li>
  );
}

export default Item;
