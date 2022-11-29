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
			const languageBarPosition = languageBar.offsetTop;
			const countryName = flag.firstElementChild.getAttribute('alt');
			tile.firstElementChild.innerHTML = `${countryName}`;
			tile.classList.add('language-title--active');
			tile.setAttribute(
				'style',
				`top: ${flag.offsetTop + languageBarPosition - 10}px; right: ${
					languageBar.getBoundingClientRect().right -
					languageBar.getBoundingClientRect().right +
					100
				}px`
			);
		});
		flag.addEventListener('mouseleave', (e) => {
			tile.classList.remove('language-title--active');
		});
	});
}

//////////////////////////////////////////////////////////////////////////////////

const header = document.querySelector('.header-container');

if (header) {
	const navbar = document.querySelector('.main-navbar');
	const icon = document.querySelector('.hamburger-icon');
	const icon1 = document.getElementById('a');
	const icon2 = document.getElementById('b');
	const icon3 = document.getElementById('c');
	const nav = document.querySelector('.navbar');
	const menuItems = document.querySelectorAll('.menu-link');

	const navbarScrollHandler = () => {
		const position = window.scrollY;
		if (position >= 30) {
			navbar.classList.add('main-navbar--active');
		}
		if (position < 30) {
			navbar.classList.remove('main-navbar--active');
		}
	};

	const hamburgerAnimationHandler = () => {
		nav.classList.toggle('navbar--active');
		icon1.classList.toggle('a');
		icon2.classList.toggle('c');
		icon3.classList.toggle('b');
		window.addEventListener('scroll', navbarScrollHandler);
	};

	const mobileMenuHandler = () => {
		window.removeEventListener('scroll', navbarScrollHandler);
		icon1.classList.toggle('a');
		icon2.classList.toggle('c');
		icon3.classList.toggle('b');
		nav.classList.toggle('navbar--active');

		if (navbar.classList.contains('main-navbar--active')) {
			navbar.classList.remove('main-navbar--active');
		} else {
			navbar.classList.add('main-navbar--active');
		}
	};

	const scrollHandler = (e) => {
		const targetItem = document.querySelector(`${e.target.dataset.target}`);
		targetItem.scrollIntoView({ behavior: 'smooth' });
		navbar.classList.remove('main-navbar--active');
		window.addEventListener('scroll', navbarScrollHandler);
	};

	icon.addEventListener('click', mobileMenuHandler);

	menuItems.forEach((item) => {
		item.addEventListener('click', hamburgerAnimationHandler);
	});

	menuItems.forEach((item) => {
		item.addEventListener('click', scrollHandler);
	});
	window.addEventListener('scroll', navbarScrollHandler);
}

//////////////////////////////////////////////////////////////////////////////////

const arrow = document.querySelector('.arrow-cont');

if (arrow) {
	const arrowHandler = () => {
		const mainContent = document.querySelector('main');
		mainContent.scrollIntoView({ behavior: 'smooth' });
	};
	arrow.addEventListener('click', arrowHandler);
}

//////////////////////////////////////////////////////////////////////////////////

const form = document.querySelector('.form__body');

if (form) {
	const submitBtn = form.querySelector('.contact-cta');
	const handleMailer = (e) => {
		e.preventDefault();
		const userName = form.querySelector('#userName').value;
		const email = form.querySelector('#email').value;
		const subject = form.querySelector('#subject').value;
		const text = form.querySelector('#text').value;

		fetch(`/send`, {
			Method: 'POST',
			Headers: {
				'Content-Type': 'application/json',
			},
			Body: JSON.stringify({ userName, email, subject, text }),
		}).then((res) => console.log(res));
	};
	submitBtn.addEventListener('click', handleMailer);
}
