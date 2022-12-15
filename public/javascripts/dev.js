import smoothscroll from './smoothscroll.min.js';

smoothscroll.polyfill();
const mainWrapper = document.querySelector('.wrapper');
if (mainWrapper) {
	const render = () => {
		const load = document.querySelector('.onload-logo-container');
		setTimeout(() => mainWrapper.removeAttribute('style'), 2300);
		const onloadRemover = () => {
			load.classList.add('wrapper--active');
			mainWrapper.classList.remove('wrapper--active');
			setTimeout(() => load.remove(), 100);
		};

		setTimeout(onloadRemover, 2400);
	};
	document.addEventListener('DOMContentLoaded', render);
}

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
			const pageHeight = window.innerHeight;
			let mobileWidthView;
			let mobileHeightView;
			console.log(pageHeight);
			if (pageHeight < 850) {
				mobileHeightView =
					languageBar.getBoundingClientRect().right -
					flag.getBoundingClientRect().x +
					32;
				mobileWidthView = flag.offsetTop + languageBarPosition;
			} else {
				mobileHeightView =
					languageBar.getBoundingClientRect().right -
					flag.getBoundingClientRect().x +
					64;
				mobileWidthView = flag.offsetTop + languageBarPosition - 10;
			}
			tile.setAttribute(
				'style',
				`top: ${mobileWidthView}px; right: ${mobileHeightView}px`
			);
		});
		flag.addEventListener('mouseleave', () => {
			tile.classList.remove('language-title--active');
		});
	});
}

const header = document.querySelector('.header-container');

if (header) {
	const navbar = document.querySelector('.main-navbar');
	const icon = document.querySelector('.hamburger-icon');
	const icon1 = document.getElementById('a');
	const icon2 = document.getElementById('b');
	const icon3 = document.getElementById('c');
	const nav = document.querySelector('.navbar');
	const menuItems = document.querySelectorAll('.menu-link');

	const navbarScrollStyling = () => {
		const position = window.scrollY;
		if (position >= 30) {
			navbar.classList.add('main-navbar--active');
		}
		if (position < 30) {
			navbar.classList.remove('main-navbar--active');
		}
	};

	const hamburgerAnimationHandler = () => {
		icon1.classList.toggle('a');
		icon2.classList.toggle('c');
		icon3.classList.toggle('b');
	};

	const mobileMenuHandler = (e) => {
		window.removeEventListener('scroll', navbarScrollStyling);

		const position = window.scrollY;
		hamburgerAnimationHandler();
		if (
			nav.classList.contains('navbar--active') &&
			e.currentTarget === icon
		) {
			window.addEventListener('scroll', navbarScrollStyling);
		}
		if (
			navbar.classList.contains('main-navbar--active') &&
			position >= 30
		) {
			nav.classList.toggle('navbar--active');
			return;
		}
		if (
			navbar.classList.contains('main-navbar--active') &&
			position <= 30
		) {
			navbar.classList.toggle('main-navbar--active');
			nav.classList.toggle('navbar--active');
			return;
		}
		nav.classList.toggle('navbar--active');
		navbar.classList.toggle('main-navbar--active');
	};

	const scrollHandler = (e) => {
		const targetItem = document.querySelector(`${e.target.dataset.target}`);
		targetItem.scrollIntoView({ behavior: 'smooth' });
		window.addEventListener('scroll', navbarScrollStyling);
	};

	icon.addEventListener('click', mobileMenuHandler);

	menuItems.forEach((item) => {
		item.addEventListener('click', mobileMenuHandler);
	});

	menuItems.forEach((item) => {
		item.addEventListener('click', scrollHandler);
	});
	window.addEventListener('scroll', navbarScrollStyling);
}

const arrow = document.querySelector('.arrow-cont');

if (arrow) {
	const arrowHandler = () => {
		const mainContent = document.querySelector('main');
		mainContent.scrollIntoView({ behavior: 'smooth' });
	};
	arrow.addEventListener('click', arrowHandler);
}

const form = document.querySelector('.form__body');

if (form) {
	const submitBtn = form.querySelector('.contact-cta');

	const contactFormPopup = (message) => {
		const contactContainer = document.querySelector('.contact-form');
		contactContainer.classList.add('contact-form--active');
		form.classList.add('form__body--active');
		contactContainer.dataset.message = message;
		submitBtn.classList.remove('contact-cta--active');
		setTimeout(() => {
			form.classList.remove('form__body--active');
			contactContainer.classList.remove('contact-form--active');
		}, 3000);
	};

	const emptyInputChecker = (items) => {
		const emptyInputs = items.filter((item) => item.value === '');
		if (emptyInputs.length === 0) return true;
		emptyInputs.forEach((emptyInput) =>
			emptyInput.parentNode.classList.add('body__input-container--active')
		);
	};

	const inputFields = form.querySelectorAll('.form-input__field');

	const singleEmptyInputHandler = (e) => {
		if (
			e.currentTarget.parentNode.classList.contains(
				'body__input-container--active'
			)
		)
			e.currentTarget.parentNode.classList.remove(
				'body__input-container--active'
			);
		if (e.currentTarget.value === '')
			e.currentTarget.parentNode.classList.add(
				'body__input-container--active'
			);
	};
	inputFields.forEach((inputs) => {
		inputs.addEventListener('keyup', singleEmptyInputHandler);
	});
	const mailHandler = (e) => {
		e.preventDefault();
		const userName = form.querySelector('#userName');
		const email = form.querySelector('#email');
		const subject = form.querySelector('#subject');
		const text = form.querySelector('#text');
		const regExpr = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
		if (
			emptyInputChecker([userName, email, subject, text]) &&
			email.value.match(regExpr)
		) {
			submitBtn.classList.add('contact-cta--active');
			fetch(`/send`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userName: userName.value,
					email: email.value,
					subject: subject.value,
					text: text.value,
				}),
			})
				.then((res) => res.json())
				.then((json) => {
					const { message } = json.message.layout.contact.form;
					contactFormPopup(message);
					userName.value = '';
					email.value = '';
					subject.value = '';
					text.value = '';
				});
		}
		emptyInputChecker([userName, email, subject, text]);
	};

	submitBtn.addEventListener('click', mailHandler);
}
