import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
	const [ show, handleShow ] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav_black'}`}>
			<img
				className="nav_logo"
				src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
				alt="Netflix Logo"
			/>

			<img
				className="nav_avatar"
				src="https://i.pinimg.com/564x/0d/6a/b2/0d6ab257cdc929ca129ba5557b125a68.jpg"
				alt="Netflix Avatar"
			/>
		</div>
	);
}

export default Nav;
