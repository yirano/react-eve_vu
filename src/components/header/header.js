import React, { Component } from 'react';
import Slide from '../slide/slide.js';
import Trench from '../../imgs/trench.jpeg';
import Shadow from '../../imgs/shadow.jpeg';
import LeafWoman from '../../imgs/leaf-woman.jpeg';
import './header.scss';

export class header extends Component {
	state = {
		menuActive: false,
		hide: false,
		images: [ Trench, Shadow, LeafWoman ],
		currentIndex: 0,
		translateValue: 0
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

	prevSlide = () => {
		if (this.state.currentIndex === 0) {
			return this.setState({
				currentIndex: this.state.images.length - 1
			});
		}
		this.setState((prevState) => ({
			currentIndex: prevState.currentIndex - 1
		}));
	};

	nextSlide = () => {
		if (this.state.currentIndex === this.state.images.length - 1) {
			return this.setState({
				currentIndex: 0
			});
		}
		this.setState((prevState) => ({
			currentIndex: prevState.currentIndex + 1
		}));
	};

	slideWidth = () => {
		return document.querySelector('.slide').clientWidth + 90;
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	render() {
		return (
			<header className="header" id="header">
				<h1 className="headerTitle">
					e
					<span onScroll={this.handleScroll} className={this.state.hide ? 'hide' : null}>
						ve&nbsp;
					</span>
					V
					<span onScroll={this.handleScroll} className={this.state.hide ? 'hide' : null}>
						u
					</span>
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

				<div className="hero">
					<div className="heroBtnContainer">
						<button className="prevBtn" onClick={this.prevSlide}>
							Previous
						</button>
						<button className="nextBtn" onClick={this.nextSlide}>
							Next
						</button>
					</div>
					<div
						className="sliderContainer"
						style={{
							transform: `translateX(${this.state.translateValue}px)`,
							transition: 'transform ease-out 0.45s'
						}}
					>
						<Slide image={this.state.images[this.state.currentIndex]} />;
					</div>
				</div>
			</header>
		);
	}
}

export default header;
