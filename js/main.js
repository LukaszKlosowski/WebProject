const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__item')
const allSections = document.querySelectorAll('section')
const btnHeader = document.querySelector('.header__buttonBox')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav--active');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBtn.classList.remove('is-active')
        navMobile.classList.remove('nav--active')
    })
})

btnHeader.addEventListener('click', () => {
    location.href='#contact'
})

window.addEventListener("scroll", () => {
	const currentSection = window.scrollY
	allSections.forEach(section => {
		if (
			section.classList.contains("section-dark") &&
			section.offsetTop <= currentSection + 40
		) {
			navBtn.classList.add("hamburger-light")
		} else if (
			!section.classList.contains("section-dark") &&
			section.offsetTop <= currentSection + 40
		) {
			navBtn.classList.remove("hamburger-light")
		}
	})
})

const setup = () => {
    const footerYear = document.querySelector('.footer__current-year')
    footerYear.textContent = new Date().getFullYear()
}

document.addEventListener('DOMContentLoaded', setup)