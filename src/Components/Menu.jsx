import React from "react";
const Menu = (props) => {
  return props.items.map(({ title, img, desc, price, id }, index) => {
    return (
      <div className="section-center">
        <article className="menu-item">
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price" >${price}</h4>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </article>
      </div>
    );
  });
};

export default Menu;
