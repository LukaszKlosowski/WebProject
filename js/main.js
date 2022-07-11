const aboutSection = document.querySelector('.section-title--left');
const btnHeader = document.querySelector('.header__btn');
const headerTextBox = document.querySelector('.header__text-box');
const illustrationCctv = document.querySelector('.illustration__cctv');
const navDesktop = document.querySelector('.nav-desktop');

const viewportWidth = window.innerWidth;

illustrationCctv.style.top = aboutSection.getBoundingClientRect().height + 'px';

headerTextBox.classList.toggle('text-slick', viewportWidth < 992);

btnHeader.addEventListener('click', () => {
	location.href = '#services';
});

const setup = () => {
	const footerYear = document.querySelector('.footer__current-year');
	footerYear.textContent = new Date().getFullYear();
};

document.addEventListener('DOMContentLoaded', setup);
