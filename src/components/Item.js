import React, { useState } from "react";

function Item({ name, category }) {
  const[isAdd,setIsAdd]= useState(false);
  function handleAdd(){
    setIsAdd(!isAdd);
  }
  const add= isAdd? "Item Added": ""
  const buttonText= isAdd?"Remove from Cart":"Add to Cart" 
  return (
    <li className={add}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{buttonText}</button>
    </li>
  );
}

export default Item;
