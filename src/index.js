import './style.scss';
import insertNavbar from './modules/navbar';
import createHomePage from './modules/home-page';
import createMenu from './modules/menu';
import createAboutPage from './modules/about';
// import createHomePage from './modules/home-page';

insertNavbar();
createHomePage();

document.querySelectorAll('.navs').forEach((element) => {
	element.addEventListener('click', () => {
		document
			.querySelectorAll('.navs')
			.forEach((ele) => ele.classList.remove('toggle'));
		element.classList.add('toggle');

		if (element.textContent === 'Home') {
			document.querySelector('.content').remove();
			// insertNavbar();
			createHomePage();
		}
		if (element.textContent === 'Menu') {
			document.querySelector('.content').remove();
			createMenu();
		}
		if (element.textContent === 'About') {
			document.querySelector('.content').remove();
			createAboutPage();
		}
	});
});

document.querySelector('body').addEventListener('click', (e) => {
	console.log(e.target);
});
