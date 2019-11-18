import React from 'react';
import './header.scss';

export default function hero() {
	return (
		<header className="header" id="header">
			<h1 className="headerTitle">eV</h1>
			<button className="menuIcon">
				<span />
				<span />
			</button>
			<nav>
				<ul>
					<li>a</li>
				</ul>
			</nav>
			<div className="hero" />
		</header>
	);
}
