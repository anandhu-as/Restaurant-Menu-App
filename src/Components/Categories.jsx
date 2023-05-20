import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
const Categories = (props) => {
  const { filterItems } = props;
  <Routes>
    <Route path="/home" element={<Menu />} />
  </Routes>;
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        <Link to="/home">All</Link>
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        <Link to="/breakfast">Breakfast</Link>
      </button>
      <button className="filter-btn" onClick={() => filterItems("shakes")}>
        <Link to="/shakes">Shakes</Link>
      </button>
    </div>
  );
};
export default Categories;
