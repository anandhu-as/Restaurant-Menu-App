import React, { useState } from "react";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";
import items from "./data";
import "./styles/App.css"
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const filterItems = () => {};
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
