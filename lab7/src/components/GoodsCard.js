import React from "react";

function GoodsCard(props) {
  return (
    <div className="goods-card">
      <img src={props.image} alt={props.name} className="goods-image" />
      <h3 className="goods-name">{props.name}</h3>
      <p className="goods-price">{props.price} грн</p>
    </div>
  );
}

export default GoodsCard;