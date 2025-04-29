import React from "react";
import "./styles/style.css";

const marketItems = [
  {
    icon: "bx bx-store",
    title: "Store",
    description:
      "選用上等杏仁，帶給你最原始的美味。提供豐富的營養，讓你一天活力滿滿。",
  },
  {
    icon: "bx bx-store",
    title: "Store",
    description:
      "選用上等杏仁，帶給你最原始的美味。提供豐富的營養，讓你一天活力滿滿。",
  },
  {
    icon: "bx bx-store",
    title: "Store",
    description:
      "選用上等杏仁，帶給你最原始的美味。提供豐富的營養，讓你一天活力滿滿。",
  },
  {
    icon: "bx bx-store",
    title: "Store",
    description:
      "選用上等杏仁，帶給你最原始的美味。提供豐富的營養，讓你一天活力滿滿。",
  },
];

function Market() {
  return (
    <div className="Market">
      {marketItems.map((item, index) => (
        <div className="items" key={index}>
          <div className="header">
            <i className={item.icon}></i>
            <h5>{item.title}</h5>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Market;
