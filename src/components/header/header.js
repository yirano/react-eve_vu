import React, { Component } from 'react';
import './header.scss';

export class header extends Component {
	state = {
		menuActive: false,
		hide: true
	};

	handleClick = () => {
		this.setState((prevState) => {
			return (prevState.menuActive = !prevState.menuActive);
		});
	};

	handleScroll = () => {
		this.setState((prevState) => {
			if (window.scrollY > 10) {
				prevState.hide = true;
			} else {
				prevState.hide = false;
			}

			return prevState.hide;
		});
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	render() {
		const hide = {
			width: '0px',
			overflow: 'hidden'
		};

		const show = {
			width: '100%'
		};
		return (
			<header className="header" id="header">
				<h1 className="headerTitle">
					e<span onScroll={this.handleScroll} style={this.state.hide ? hide : show}>
						ve&nbsp;
					</span>V<span>u</span>
				</h1>
				<button className="menuIcon" onClick={this.handleClick}>
					<span />
					<span />
				</button>
				<nav className={this.state.menuActive ? 'show' : 'hide'} onClick={this.handleClick}>
					<svg height="32" width="32" />
					<ul>
						<li>
							<a href="/">home</a>
						</li>
						<li>
							<a href="/">portfolio</a>
						</li>
						<li>
							<a href="/">about</a>
						</li>
						<li>
							<a href="/">contact</a>
						</li>
					</ul>
				</nav>

				<div className="hero" />
			</header>
		);
	}
}

export default header;
