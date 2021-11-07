const wrapper = document.querySelector('.wrapper');
const buttons = wrapper.querySelectorAll('button');
const links = wrapper.querySelectorAll('a');

const menuTag = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');
const menuLinks = document.querySelectorAll('.menu__link');

export const menu = () => {
	menuButton.addEventListener('click', () => {
		menuTag.classList.toggle('menu--active');

		menuButton.setAttribute(
			'aria-label',
			menuTag.classList.contains('menu--active') ? 'Закрыть меню' : 'Открыть меню',
		);

		menuLinks.forEach((menuLink) => {
			menuLink.setAttribute('tabindex', menuTag.classList.contains('menu--active') ? '0' : '-1');
		});

		buttons.forEach((button) => {
			button.setAttribute('tabindex', menuTag.classList.contains('menu--active') ? '-1' : '0');
		});

		links.forEach((link) => {
			link.setAttribute('tabindex', menuTag.classList.contains('menu--active') ? '-1' : '0');
		});
	});
};
