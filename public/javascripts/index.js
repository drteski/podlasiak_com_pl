const render = () => {
	setTimeout(() => {
		document.querySelector('body').style.visibility = 'visible';
	}, 1000);
};
const header = document.querySelector('.header-container');

document.addEventListener('DOMContentLoaded', render);

if (header) {
	const navbarScrollHandler = () => {
		const position = window.scrollY;
		const navbar = document.querySelector('.main-navbar');
		const logo = document.querySelector('.logo-icon');
		if (position >= 30) {
			navbar.classList.add('main-navbar--active');
			logo.setAttribute('src', '/images/logo_podlasiak.png');
		}
		if (position < 30) {
			navbar.classList.remove('main-navbar--active');
			logo.setAttribute('src', '/images/logo_podlasiakw.png');
		}
	};
	window.addEventListener('scroll', navbarScrollHandler);
}

const languageBar = document.querySelector('.language-flag');

if (languageBar) {
	const setLanguageBarPosition = () => {
		const headerHeight = header.getBoundingClientRect().height;
		const barHeight = languageBar.getBoundingClientRect().height;
		languageBar.setAttribute(
			'style',
			`top: ${(headerHeight - barHeight) / 2}px`
		);
	};

	window.onload = () => setLanguageBarPosition();
	window.addEventListener('resize', setLanguageBarPosition);
}

const hamburger = document.querySelector('.navbar__icon');

if (hamburger) {
	const menuHandler = (e) => {
		e.target.innerHTML = 'close';
	};
	hamburger.addEventListener('click', menuHandler);
}
