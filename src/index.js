import './style.scss';
import insertNavbar from './modules/navbar';
import createHomePage from './modules/home-page';
import createMenu from './modules/menu';
// import createHomePage from './modules/home-page';

insertNavbar();
createHomePage();

document.querySelectorAll('.navs').forEach((element) => {
	element.addEventListener('click', () => {
		if (element.textContent === 'Home') {
			document.querySelector('.content').remove();
			// insertNavbar();
			createHomePage();
		}
		if (element.textContent === 'Menu') {
			document.querySelector('.content').remove();
			createMenu();
		}
	});
});
