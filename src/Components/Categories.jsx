import React from 'react'
const Categories = (props) => {
	const filterItems = props.filterItems
	return (
		<div className="btn-container">
			<button className="filter-btn" onClick={() => filterItems('all')}>All</button>
			<button className="filter-btn" onClick={() => filterItems('breakfast')}>Breakfast</button>
			<button className="filter-btn" onClick={() => filterItems('shakes')}>Shakes</button>
			<button className="filter-btn" onClick={() => filterItems('lunch')}>lunch</button>
		</div>
	)
}
export default Categories
