// Меню-бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Скролл шапки
window.onscroll = function showHeader () {
	let header = document.querySelector('.header');
	if (window.pageYOffset > 10) {
		header.classList.add('header-fixed');
	}
	else header.classList.remove('header-fixed');
}