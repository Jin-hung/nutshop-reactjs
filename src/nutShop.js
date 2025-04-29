import React from "react";
import "./styles/style.css";
const products = [
  {
    imgSrc: "images/nuts.jpg",
    title: "原味堅果",
    description: "純天然堅果混合，滿足你的營養需求。",
    price: "NT $200",
  },
  {
    imgSrc: ".images/nuts.jpg",
    title: "原味堅果",
    description: "純天然堅果混合，滿足你的營養需求。",
    price: "NT $200",
  },
  {
    imgSrc: "images/nuts.jpg",
    title: "原味堅果",
    description: "純天然堅果混合，滿足你的營養需求。",
    price: "NT $200",
  },
  {
    imgSrc: "images/nuts.jpg",
    title: "原味堅果",
    description: "純天然堅果混合，滿足你的營養需求。",
    price: "NT $200",
  },
  {
    imgSrc: "images/nuts.jpg",
    title: "原味堅果",
    description: "純天然堅果混合，滿足你的營養需求。",
    price: "NT $200",
  },
];

function NutShop() {
  return (
    <div className="nutShop">
      <div className="category">
        <a href="#">Nuts</a>
        <a href="#">Dried Fruit</a>
        <a href="#">Biscuit</a>
        <a href="#">Beverage</a>
      </div>

      <div className="shopList">
        {products.map((product, index) => (
          <div className="shopItems" key={index}>
            <img src={product.imgSrc} alt={product.title} />
            <div className="info">
              <div className="header">
                <h5>{product.title}</h5>
              </div>
              <p>{product.description}</p>
              <div className="price">
                <span>{product.price}</span>
              </div>
              <div className="toCart">
                <i className="bx bx-cart-add"></i>
                <a href="#">加入購物車</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="viewMore">
        <button>View More</button>
      </div>
    </div>
  );
}

export default NutShop;
