import React, { useState } from "react";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";
import items from "./data";
import "./styles/App.css";
const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const categories = ['all',...new Set(items.map(item => item['category']))]
  const filterItems = (category) => {
    category === "all"
      ? setMenuItems(items)
      : setMenuItems(() => items.filter((item) => item.category === category));
  };
  return (
    
    <main>
         <nav><h1>Restaurant-Menu</h1></nav>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems}  categories={categories}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
