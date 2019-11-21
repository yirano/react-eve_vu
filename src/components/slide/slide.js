import React from 'react';

const Slide = ({ image }) => {
	const styles = {
		backgroundImage: `url(${image})`
	};
	return <div className="slide" style={styles} />;
};

export default Slide;
