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

//////////////////////////////////////////////////////////////////////////////////

const languageBar = document.querySelector('.language-flag');

if (languageBar) {
	const flags = document.querySelectorAll('.lang');
	const tile = document.querySelector('.language-title');

	flags.forEach((flag) => {
		flag.addEventListener('mouseenter', () => {
			const countryName = flag.firstElementChild.getAttribute('alt');
			tile.firstElementChild.innerHTML = `${countryName}`;
			tile.classList.add('language-title--active');
			tile.setAttribute(
				'style',
				`top: ${flag.getBoundingClientRect().top - 10}px; right: ${
					languageBar.getBoundingClientRect().right -
					languageBar.getBoundingClientRect().right +
					105
				}px`
			);
		});
		flag.addEventListener('mouseleave', () => {
			tile.classList.remove('language-title--active');
		});
	});
}

//////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////

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
	const logo = document.querySelector('.logo-icon');
	logo.setAttribute('src', '/images/logo_podlasiak.png');
});

const menuItems = document.querySelectorAll('.menu-link');

menuItems.forEach((item) => {
	const nav = document.querySelector('.navbar');
	item.addEventListener('click', () => {
		nav.classList.remove('navbar--active');
		icon1.classList.toggle('a');
		icon2.classList.toggle('c');
		icon3.classList.toggle('b');
	});
});
