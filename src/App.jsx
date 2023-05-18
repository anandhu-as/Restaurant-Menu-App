import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './categories'
import items from './data'
import "./App.css"

function App() {
	return <>
    <main>
	<section className="menu section">
		<div className="title">
			<h2>our menu</h2>
			<div className="underline"></div>
		</div>
		<Categories />
		<Menu items={items} />
	</section>
</main>
    </>
}

export default App
