import React,{useState} from "react";

function Item({ name, category }) {
  const[inCart, setInCart] =useState(false)

function hundleClick(){
  setInCart((inCart) => !inCart)
}

  return (
    <li className= {inCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart? "remove" : "add"} onClick= {hundleClick}  >{inCart? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
