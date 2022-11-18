const render = () => {
	const wrapper = document.querySelector('.wrapper');
	const load = document.querySelector('.onload-logo-container');
	setTimeout(() => wrapper.removeAttribute('style'), 2300);
	const onloadRemover = () => {
		load.classList.add('wrapper--active');
		wrapper.classList.remove('wrapper--active');
		setTimeout(() => load.remove(), 100);
	};

	setTimeout(onloadRemover, 2400);
};
document.addEventListener('DOMContentLoaded', render);

const header = document.querySelector('.header-container');

if (header) {
	const navbarScrollHandler = () => {
		const position = window.scrollY;
		const arrow = document.querySelector('.arrow-cont');
		const navbar = document.querySelector('.main-navbar');
		const logo = document.querySelector('.logo-icon');
		if (position >= 30) {
			arrow.classList.add('arrow-cont--active');
			navbar.classList.add('main-navbar--active');
			logo.setAttribute('src', '/images/logo_podlasiak.png');
		}
		if (position < 30) {
			arrow.classList.remove('arrow-cont--active');
			navbar.classList.remove('main-navbar--active');
			logo.setAttribute('src', '/images/logo_podlasiakw.png');
		}
	};
	window.addEventListener('scroll', navbarScrollHandler);
}

// const languageBar = document.querySelector('.language-flag');
//
// if (languageBar) {
// 	const setLanguageBarPosition = () => {
// 		const headerHeight = header.getBoundingClientRect().height;
// 		const barHeight = languageBar.getBoundingClientRect().height;
// 		languageBar.setAttribute(
// 			'style',
// 			`top: ${(headerHeight - barHeight) / 2}px`
// 		);
// 	};
//
// 	window.onload = () => setLanguageBarPosition();
// 	window.addEventListener('resize', setLanguageBarPosition);
// }

const hamburger = document.querySelector('.navbar__icon');

if (hamburger) {
	const menuHandler = (e) => {
		e.target.classList.toggle('navbar__icon--active');
	};
	hamburger.addEventListener('click', menuHandler);
}

const navbar = document.querySelectorAll('.menu-link');

const highlightHandler = () => {};

const icon = document.getElementById('icon');
const icon1 = document.getElementById('a');
const icon2 = document.getElementById('b');
const icon3 = document.getElementById('c');
const nav = document.querySelector('.navbar');

icon.addEventListener('click', function () {
	icon1.classList.toggle('a');
	icon2.classList.toggle('c');
	icon3.classList.toggle('b');
	nav.classList.toggle('navbar--active');
});
